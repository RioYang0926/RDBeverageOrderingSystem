import React, { useState } from 'react';

import './App.css';
import MenuList from './components/Menu/MenuList';
import OrderHistory from './components/Order/OrderHistory';
import LoginForm from './components/Auth/LoginForm';

function App() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  return (
    <div className="App">
      <h1>RD 飲料點餐系統</h1>
      {!user ? (
        <LoginForm onLogin={(username, role) => setUser({ username, role })} />
      ) : (
        <>
          <div>歡迎，{user.username}（{user.role}）<button onClick={() => setUser(null)}>登出</button></div>
          <MenuList />
          <OrderHistory />
        </>
      )}
    </div>
  );
}

export default App;
