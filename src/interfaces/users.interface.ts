export interface IUserRequest {
  email: string;
  name: string;
  phone: number;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  phone: number;
  password: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  id: string;
  isActive: boolean;
}

export interface IUserUpdate {
  email?: string;
  name?: string;
  phone?: number;
  password?: string;
}
