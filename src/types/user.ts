import { Auth } from "./auth";

export type User = Auth & {
  id: number;
  name: string;
  createdAt: string;
};
export interface UserCreationDto {
  name: string;
  email: string;
  password: string;
}
