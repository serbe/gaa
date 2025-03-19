const api_url = process.env.NODE_ENV === 'development' ? 'http://localhost:4050/api' : '/api';

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!res.ok) {
    const error = new Error('An error occurred');
    error.message = await res.json();
    throw error;
  }
  return res.json();
};

export const sendRegister = async (username: string, password: string) => {
  const res = await fetch(`${api_url}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error(await res.json());
  return res.json();
};

export const sendLogin = async (username: string, password: string) => {
  const res = await fetch(`${api_url}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error(await res.json());
  return res.json();
};

export const fetchProtectedData = async (token: string) => {
  const res = await fetch(`${api_url}/protected`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
