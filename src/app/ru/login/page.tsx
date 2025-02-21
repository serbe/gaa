'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendLogin } from '@/utils/fetcher';
import { useGaaStore } from '@/context/gaa-store-provider';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [{ login: login }] = useGaaStore((state) => state);

  const handleLogin = async () => {
    try {
      const response = await sendLogin(username, password);
      login(username, response.token);
      router.push('/');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
