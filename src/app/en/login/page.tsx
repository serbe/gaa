'use client';
import { useGaaStore } from '@/context/gaa-store-provider';
import { useRouter } from '@/i18n/routing';
import { sendLogin } from '@/utils/api';
import { useState } from 'react';
import useSWR from 'swr';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { mutate } = useSWR('/api/protected');
  const [{ login: login }] = useGaaStore((state) => state);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendLogin(username, password);
      login(username, response.token);
      await mutate();
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
      {error && <div className="">{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
