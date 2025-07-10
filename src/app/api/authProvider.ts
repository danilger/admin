import {  AuthProvider } from "react-admin";
import { fetcher, refreshAuth } from "./refreshAuth";


// Базовый URL для API
const apiUrl = "http://127.0.0.1:5000";

export const authProvider: AuthProvider = 
  {
    async login(params: { username: string; password: string }) {
      // Отправляем запрос на авторизацию
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Неверное имя пользователя или пароль");
        }
        throw new Error(response.statusText);
      }

      const userData = await fetcher(`${apiUrl}/user/me`).then((res) =>
        res.json()
      );
      localStorage.setItem("user", JSON.stringify(userData));

      return { redirectTo: "/" };
    },

    async checkError(error: any) {
      console.error(error);
      try {
        await refreshAuth();
        return Promise.resolve();
      } catch {
        localStorage.removeItem("user");
        return Promise.reject();
      }
    },

    async checkAuth() {
      try {
        const response = await fetch(`${apiUrl}/auth/check`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          return Promise.reject();
        }

        return Promise.resolve();
      } catch (error) {
        return Promise.reject();
      }
    },

    async logout() {
      try {
        // Отправляем запрос на выход
        await fetch(`${apiUrl}/auth/logout`, {
          method: "POST",
          credentials: "include",
        });
      } catch (error) {
        console.error("Ошибка при выходе из системы:", error);
      }

      // Очищаем данные пользователя из localStorage
      localStorage.removeItem("user");
      return Promise.resolve();
    },

    async getIdentity() {
      const user = localStorage.getItem("user");
      if (!user) {
        return Promise.reject("User not found");
      }

      try {
        const userData = JSON.parse(user);
        return Promise.resolve({
          id: userData.id,
          fullName: userData.email,
          avatar: undefined,
        });
      } catch (error) {
        return Promise.reject("Invalid user data");
      }
    },

    async getPermissions() {
      const user = localStorage.getItem("user");
      if (!user) {
        return Promise.reject("User not found");
      }

      try {
        // В данной реализации просто возвращаем данные пользователя
        // В более сложных случаях можно запросить права с сервера
        return Promise.resolve(JSON.parse(user));
      } catch (error) {
        return Promise.reject("Invalid user data");
      }
    },
  }
