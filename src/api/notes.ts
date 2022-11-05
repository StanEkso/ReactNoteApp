import { Auth } from "../types/auth";
import { Note } from "../types/note";
import { User } from "../types/user";
import { BASE_URL } from "./constants";

export const getNotes = (userId: number): Promise<Note[]> => {
  return fetch(BASE_URL + "/notes/", {})
    .then((r) => r.json())
    .then((notes: Note[]) => notes.filter((note) => note.userId === userId));
};
export const loginUser = (dto: Auth): Promise<User> => {
  return fetch("http://localhost:5000/users")
    .then((r) => r.json())
    .then((users: User[]) => {
      const existing = users.find(
        (u) => u.password === dto.password && u.email === dto.email
      );
      if (existing) return existing;
      throw new Error("Cannot authorize you!");
    });
};
