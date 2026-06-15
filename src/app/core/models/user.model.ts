export interface User {
  id: number;
  name: string;
  email: string;
  role?: 'admin' | 'customer' | string;
  token?: string;
}
