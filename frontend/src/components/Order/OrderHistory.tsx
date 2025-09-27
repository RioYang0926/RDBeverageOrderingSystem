import React, { useState } from 'react';
import OrderList from './OrderList';

const OrderHistory: React.FC = () => {
  const [date, setDate] = useState('');

  return (
    <div>
      <h3>查詢歷史點餐紀錄</h3>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        max={new Date().toISOString().slice(0, 10)}
      />
      {date && <OrderList date={date} />}
    </div>
  );
};

export default OrderHistory;
