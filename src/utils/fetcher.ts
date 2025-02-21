export const sendRegister = async (username: string, password: string) => {
  const response = await fetch('http://localhost:8000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
};

export const sendLogin = async (username: string, password: string) => {
  const response = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  return response.json();
};

export const fetchProtectedData = async (token: string) => {
  const response = await fetch('http://localhost:8000/protected', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Not authorized');
  }

  return response.json();
};

export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Not authorized');
    }
    return res.json();
  });
