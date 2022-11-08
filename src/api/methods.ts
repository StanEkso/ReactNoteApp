import { BASE_URL, ERROR_PLACEHOLDER } from "./constants";

export const get = <T>(endpoint: string, errorMessage?: string): Promise<T> =>
  fetch(`${BASE_URL}${endpoint}`)
    .then((r) => {
      if (r.status === 404) throw new Error(errorMessage || ERROR_PLACEHOLDER);
      return r.json();
    })
    .catch(() => {
      throw new Error(ERROR_PLACEHOLDER);
    });

export const post = <T>(
  endpoint: string,
  body: Partial<T>,
  errorMessage?: string
): Promise<T> =>
  fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (r.status === 404) throw new Error(errorMessage || ERROR_PLACEHOLDER);
      return r.json();
    })
    .catch(() => {
      throw new Error(ERROR_PLACEHOLDER);
    });

export const patch = <T>(
  endpoint: string,
  body: Partial<T>,
  errorMessage?: string
): Promise<T> =>
  fetch(`${BASE_URL}${endpoint}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (r.status === 404) throw new Error(errorMessage || ERROR_PLACEHOLDER);
      return r.json();
    })
    .catch(() => {
      throw new Error(ERROR_PLACEHOLDER);
    });

export const deleteReq = <T>(
  endpoint: string,
  errorMessage?: string
): Promise<T> =>
  fetch(`${BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (r.status === 404) throw new Error(errorMessage || ERROR_PLACEHOLDER);
      return r.json();
    })
    .catch(() => {
      throw new Error(ERROR_PLACEHOLDER);
    });
