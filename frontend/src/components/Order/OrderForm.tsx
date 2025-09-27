import React, { useState, useEffect } from 'react';
import { API_BASE } from '../../config';
import { MenuItem } from '../Menu/MenuList';

interface OrderFormProps {
  menuId: number;
  onOrderSuccess?: () => void;
}

const sweetnessOptions = ['正常', '半糖', '微糖', '無糖'];
const iceOptions = ['正常', '少冰', '微冰', '去冰', '熱飲'];

const OrderForm: React.FC<OrderFormProps> = ({ menuId, onOrderSuccess }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [drinkName, setDrinkName] = useState('');
  const [menuItemId, setMenuItemId] = useState<number | null>(null);
  const [toppings, setToppings] = useState('');
  const [sweetness, setSweetness] = useState('正常');
  const [iceLevel, setIceLevel] = useState('正常');
  const [buyerName, setBuyerName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
  fetch(`${API_BASE}/api/menus/${menuId}/items`)
      .then(res => res.json())
      .then(data => setMenuItems(data));
  }, [menuId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const order = {
      orderDate: new Date().toISOString().slice(0, 10),
      orderItems: [
        {
          menuItem: menuItemId ? { id: menuItemId } : null,
          drinkName,
          toppings,
          sweetness,
          iceLevel,
          buyerName,
        },
      ],
    };
  const res = await fetch(`${API_BASE}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    if (res.ok) {
      setMessage('點餐成功！');
      setDrinkName('');
      setMenuItemId(null);
      setToppings('');
      setSweetness('正常');
      setIceLevel('正常');
      setBuyerName('');
      if (onOrderSuccess) onOrderSuccess();
    } else {
      setMessage('點餐失敗，請重試');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>我要點餐</h3>
      <div>
        <label>飲料名稱：</label>
        <select value={menuItemId ?? ''} onChange={e => setMenuItemId(Number(e.target.value))}>
          <option value="">--請選擇--</option>
          {menuItems.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        <span> 或自訂：<input value={drinkName} onChange={e => setDrinkName(e.target.value)} /></span>
      </div>
      <div>
        <label>加料：</label>
        <input value={toppings} onChange={e => setToppings(e.target.value)} placeholder="珍珠、椰果等" />
      </div>
      <div>
        <label>甜度：</label>
        <select value={sweetness} onChange={e => setSweetness(e.target.value)}>
          {sweetnessOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label>冰量：</label>
        <select value={iceLevel} onChange={e => setIceLevel(e.target.value)}>
          {iceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label>點餐者姓名：</label>
        <input value={buyerName} onChange={e => setBuyerName(e.target.value)} required />
      </div>
      <button type="submit">送出</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default OrderForm;
