export interface User {
  _id: string;
  name: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  type: string;
  token?: string;
}
