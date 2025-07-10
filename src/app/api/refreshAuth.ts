const apiUrl = "http://127.0.0.1:5000";
let refreshPromise: Promise<void> | null = null;
// Очередь запросов хранит параметры для повторного выполнения
let requestQueue: Array<{
  url: string;
  options: RequestInit;
}> = [];

/**
 * Функция для обновления токена аутентификации
 */
export const refreshAuth = async (): Promise<void> => {
  if (!refreshPromise) {
    refreshPromise = fetch(`${apiUrl}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось обновить токен");
        }
      })
      .finally(() => {
        refreshPromise = null;
        // Запускаем запросы из очереди последовательно
        while (requestQueue.length > 0) {
          const request = requestQueue.shift();
          if (request) {
            fetchWithCredentials(request.url, request.options);
          }
        }
      });
  }

  return refreshPromise;
};



/**
 * Обёртка над fetch, которая обновляет access-токен при 401 и повторяет запрос
 */
export const fetcher = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
    

  const response = await fetchWithCredentials(url, options);

  if (response.status !== 401) {
    return response;
  }

  // Добавляем запрос в очередь
  requestQueue.push({ url, options });

  // Запускаем обновление токена если оно еще не идет
  if (!refreshPromise) {
    await refreshAuth();
  }

  // Возвращаем оригинальный ответ с 401,
  // новый запрос будет выполнен после обновления токена
  return response;
};


/**
 * Базовая функция fetch с включёнными credentials
 */
export const fetchWithCredentials = (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  return fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
};