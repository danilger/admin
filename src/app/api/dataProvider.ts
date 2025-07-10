import { DataProvider } from "react-admin";
import { fetcher } from "./refreshAuth";

const API_URL = "http://127.0.0.1:5000";

export const dataProvider: DataProvider = 
  {
    getList: async (resource, params) => {
      const { page, perPage } = params.pagination || {};
      const { field, order } = params.sort || {};
      const { ...filters } = params.filter || {};

      const query = new URLSearchParams({
        ...(page && { page: page.toString() }),
        ...(perPage && { perPage: perPage.toString() }),
        ...(field && { sort: field, order }),
        ...filters,
      });

      const response = await fetcher(
        `${API_URL}/${resource}?${query}`
      );
      const data = await response.json();
      return { data, total: data.length };
    },

    getOne: async (resource, params) => {
      const response = await fetcher(
        `${API_URL}/${resource}/${params.id}`
      );
      const data = await response.json();
      return { data };
    },

    getMany: async (resource, params) => {
      const response = await Promise.all(
        params.ids.map((id) =>
          fetcher(`${API_URL}/${resource}/${id}`)
        )
      );
      const data = await Promise.all(response.map((r) => r.json()));
      return { data };
    },

    getManyReference: async (resource, params) => {
      const response = await fetcher(
        `${API_URL}/${resource}?${params.target}=${params.id}`
      );
      const data = await response.json();
      return { data, total: data.length };
    },

    update: async (resource, params) => {
      const response = await fetcher(
        `${API_URL}/${resource}/${params.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(params.data),
        }
      );
      const data = await response.json();
      return { data };
    },

    updateMany: async (resource, params) => {
      await Promise.all(
        params.ids.map((id) =>
          fetcher(`${API_URL}/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(params.data),
          })
        )
      );
      return { data: params.ids };
    },

    create: async (resource, params) => {
      const response = await fetcher(`${API_URL}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      });
      const data = await response.json();
      return { data };
    },

    delete: async (resource, params) => {
      if (!params.previousData) {
        throw new Error("Previous data is required");
      }
      await fetcher(`${API_URL}/${resource}/${params.id}`, {
        method: "DELETE",
      });
      return { data: params.previousData };
    },

    deleteMany: async (resource, params) => {
      await Promise.all(
        params.ids.map((id) =>
          fetcher(`${API_URL}/${resource}/${id}`, {
            method: "DELETE",
          })
        )
      );
      return { data: params.ids };
    },
  }

