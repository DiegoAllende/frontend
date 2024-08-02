export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
}

export interface User extends Pick<AuthenticatedUser, 'email' | 'name'> {
  password: string
}