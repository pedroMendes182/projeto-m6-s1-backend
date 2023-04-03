export interface IContactRequest {
  email: string;
  name: string;
  phone: number;
}

export interface IContactUpdate {
  email?: string;
  name?: string;
  phone?: number;
}
