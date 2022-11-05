import { Auth, UserCreationDto } from "../types/auth";
import { User } from "../types/user";
import { BASE_URL } from "./constants";

export const createUser = (dto: UserCreationDto): Promise<User> => {
  const currentDateString = new Date().toISOString();
  const userObject = { ...dto, createdAt: currentDateString };
  return fetch(BASE_URL + "/users/", {
    method: "POST",
    body: JSON.stringify(userObject),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
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
