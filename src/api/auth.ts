const AUTH_URL =
  process.env.REACT_APP_AUTH_URL || 'http://localhost:8000/users/api/token-auth/';

interface LoginResponse {
  token: string;
}

export async function login(username: string, password: string): Promise<string> {
  const response = await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Invalid credentials');
  }
  const data: LoginResponse = await response.json();
  return data.token;
}