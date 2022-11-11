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

export interface Auth {
  email: string;
  password: string;
}

export interface AuthUtils {
  user: User | null;
  login: (user: Auth) => Promise<void>;
  logout: () => void;
  register: (dto: UserCreationDto) => Promise<void>;
}
