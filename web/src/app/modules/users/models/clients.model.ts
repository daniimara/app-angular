export interface IClients {
  isActive: boolean;
  isAccept: boolean;
  needChangePassword: boolean;
  _id: string;
  email: string;
  password: string;
  username: string;
  name: string;
  createdAt: Date;
}
