import { Note } from "../types/note";
import { getCurrentISO } from "../utils/date";
import { deleteReq, get, patch, post } from "./methods";

export const getNotes = (userId: number): Promise<Note[]> =>
  get(`/notes?userId=${userId}&_sort=createdAt&_order=desc`);
export const createNote = (
  dto: Omit<Note, "id" | "createdAt">
): Promise<Note> => {
  const noteObject = { ...dto, createdAt: getCurrentISO() };
  return post<Note>(`/notes/`, noteObject);
};

export const getNoteById = (id: number): Promise<Note> => get(`/notes/${id}`);

export const getUserNoteById = (userId: number, id: number): Promise<Note> => {
  return get<Note[]>(`/notes?userId=${userId}`).then((notes: Note[]) => {
    const existing = notes.find((note) => note.id === id);
    if (existing) return existing;
    throw new Error("Not found");
  });
};

export const deleteNote = (id: number): Promise<Note> =>
  deleteReq(`/notes/${id}`, "Not Found");

export const updateNode = (dto: Partial<Note> & { id: number }) => {
  const { id, ...note } = dto;
  return patch<Note>(`/notes/${id}`, note, "No access");
};
