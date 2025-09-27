import React, { useState } from 'react';
import { API_BASE } from '../../config';

const LoginForm: React.FC<{ onLogin: (username: string, role: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 簡易登入流程，實際應串接後端驗證
  const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      onLogin(data.username, data.role);
    } else {
      setError('登入失敗，請檢查帳號密碼');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>登入</h3>
      <div>
        <label>帳號：</label>
        <input value={username} onChange={e => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>密碼：</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button type="submit">登入</button>
      {error && <div style={{color:'red'}}>{error}</div>}
    </form>
  );
};

export default LoginForm;
