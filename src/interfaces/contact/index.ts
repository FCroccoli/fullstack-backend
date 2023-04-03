export interface IContactRequest {
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
}

export interface IContactUpdate {
  first_name?: string | undefined | null;
  last_name?: string | undefined | null;
  email?: string | undefined | null;
  telephone?: string | undefined | null;
  password?: string | undefined | null;
}

export interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  createdAt: Date;
}
