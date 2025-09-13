import axios from "axios";

export interface User {
  id: number;
  username: string;
  email: string;
  rol: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

const AUTH_URL =
  process.env.REACT_APP_AUTH_URL ||
  "http://djangoerp.duckdns.org/users/api/token-auth/";

export async function loginApi(
  username: string,
  password: string
): Promise<{ token: string; user: User }> {
  const { data } = await axios.post<LoginResponse>(
    AUTH_URL,
    { username, password },
    { headers: { "Content-Type": "application/json" } }
  );

  return { token: data.token, user: data.user };
}
