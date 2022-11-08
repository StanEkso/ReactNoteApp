import { Auth } from "../types/auth";
import { User, UserCreationDto } from "../types/user";
import { get, post } from "./methods";

export const createUser = (dto: UserCreationDto): Promise<User> => {
  const userObject = { ...dto, createdAt: new Date().toISOString() };
  return post<User>(`/users`, userObject, "Cannot create user");
};
export const loginUser = ({ email, password }: Auth): Promise<User> => {
  return get<User[]>(`/users?email=${email}&password=${password}`).then(
    (users: User[]) => {
      if (users.length === 1) return users[0];
      throw new Error("Cannot authorize you!");
    }
  );
};
