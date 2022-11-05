import { Note } from "../types/note";
import { BASE_URL } from "./constants";

export const getNotes = (userId: number): Promise<Note[]> => {
  return fetch(BASE_URL + `/users/${userId}/notes/`, {}).then((r) => r.json());
};
export const createNote = (
  dto: Omit<Note, "id" | "createdAt">
): Promise<Note> => {
  const currentDateString = new Date().toISOString();
  const noteObject = { ...dto, createdAt: currentDateString };
  return fetch(BASE_URL + "/notes/", {
    method: "POST",
    body: JSON.stringify(noteObject),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};

export const getNoteById = (id: number): Promise<Note> => {
  return fetch(BASE_URL + `/notes/${id}`).then((r) => r.json());
};

export const deleteNote = (id: number): Promise<Note> => {
  return fetch(BASE_URL + "/notes/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};