import React, { useEffect, useState } from 'react';
import { API_BASE } from '../../config';

interface OrderItem {
  id: number;
  drinkName: string;
  toppings: string;
  sweetness: string;
  iceLevel: string;
  buyerName: string;
}

interface Order {
  id: number;
  orderDate: string;
  orderItems: OrderItem[];
}

const OrderList: React.FC<{ date?: string }> = ({ date }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
  const url = date ? `${API_BASE}/api/orders/date/${date}` : `${API_BASE}/api/orders/today`;
  fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [date]);

  return (
    <div>
      <h3>今日點餐紀錄</h3>
      {orders.length === 0 && <div>暫無紀錄</div>}
      {orders.map(order => (
        <div key={order.id} style={{border:'1px solid #ccc',margin:'8px',padding:'8px'}}>
          <div>訂單編號：{order.id} 日期：{order.orderDate}</div>
          <ul>
            {order.orderItems && order.orderItems.map(item => (
              <li key={item.id}>
                {item.buyerName}：{item.drinkName} {item.toppings && `(${item.toppings})`} [{item.sweetness}/{item.iceLevel}]
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
