import { Auth } from "./auth";

export type User = Auth & {
  id: number;
  name: string;
  createdAt: string;
};
