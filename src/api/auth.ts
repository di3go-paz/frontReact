import axios from 'axios';

const AUTH_URL =
  process.env.REACT_APP_AUTH_URL || 'http://localhost:8000/users/api/token-auth/';

interface LoginResponse {
  token: string;
}

export async function login(
  username: string,
  password: string
): Promise<string> {
  try {
    const { data } = await axios.post<LoginResponse>(AUTH_URL, {
      username,
      password,
    });
    return data.token;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
}