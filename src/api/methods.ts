import { BASE_URL } from "./constants";

export const get = <T>(endpoint: string): Promise<T> =>
  fetch(BASE_URL + "/" + endpoint).then((r) => r.json());
export const post = <T, U>(endpoint: string, body: U): Promise<T> =>
  fetch(BASE_URL + "/" + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((r) => r.json());

export const put = <T, U>(endpoint: string, body: U): Promise<T> =>
  fetch(BASE_URL + "/" + endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((r) => r.json());
export const deleteMethod = <T>(endpoint: string): Promise<T> =>
  fetch(BASE_URL + "/" + endpoint, { method: "DELETE" }).then((r) => r.json());
