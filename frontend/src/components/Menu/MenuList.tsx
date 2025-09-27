import React, { useEffect, useState } from 'react';
import { API_BASE } from '../../config';
import OrderForm from '../Order/OrderForm';
import OrderList from '../Order/OrderList';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  options: any;
}

export interface Menu {
  id: number;
  menuDate: string;
  imageUrl?: string;
  pdfUrl?: string;
  vendor: {
    id: number;
    name: string;
  };
}

const MenuList: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
  fetch(`${API_BASE}/api/menus/today`)
      .then(res => res.json())
      .then(data => {
        setMenus(data);
        if (data.length > 0) setSelectedMenuId(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (selectedMenuId) {
  fetch(`${API_BASE}/api/menus/${selectedMenuId}/items`)
        .then(res => res.json())
        .then(data => setMenuItems(data));
    }
  }, [selectedMenuId]);

  return (
    <div>
      <h2>今日菜單</h2>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            <button onClick={() => setSelectedMenuId(menu.id)}>
              {menu.vendor.name}（{menu.menuDate}）
            </button>
            {menu.imageUrl && <img src={menu.imageUrl} alt="menu" style={{maxWidth:200}} />}
            {menu.pdfUrl && <a href={menu.pdfUrl} target="_blank" rel="noopener noreferrer">PDF</a>}
          </li>
        ))}
      </ul>
      <h3>飲料項目</h3>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      {selectedMenuId && (
        <OrderForm menuId={selectedMenuId} onOrderSuccess={() => {}} />
      )}
      <OrderList />
    </div>
  );
};

export default MenuList;
