export interface IUserRequest {
  name: string;
  last_name: string;
  email: string;
  telephone: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  last_name: string;
  email: string;
  telephone: string;
  createdAt: Date;
}

export interface IUserUpdate {
  name?: string | undefined | null;
  last_name?: string | undefined | null;
  email?: string | undefined | null;
  telephone?: string | undefined | null;
  password?: string | undefined | null;
}
