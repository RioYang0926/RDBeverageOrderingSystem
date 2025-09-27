-- 建立 schema
CREATE SCHEMA IF NOT EXISTS rd_drinks;
SET search_path TO rd_drinks;

-- 使用者表（含權限）
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    display_name VARCHAR(50),
    role VARCHAR(20) NOT NULL DEFAULT 'user', -- 'admin' or 'user'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 廠家資料表
CREATE TABLE vendors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    logo_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 每日菜單（含圖片/PDF）
CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    vendor_id INTEGER REFERENCES vendors(id),
    menu_date DATE NOT NULL,
    image_url VARCHAR(255),
    pdf_url VARCHAR(255),
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 菜單飲料項目
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER REFERENCES menus(id),
    name VARCHAR(100) NOT NULL,
    price NUMERIC(6,2),
    options JSONB, -- 甜度/冰量/加料等可選項
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 點餐主表
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    order_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 點餐明細
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    menu_item_id INTEGER REFERENCES menu_items(id),
    drink_name VARCHAR(100), -- 若自由輸入
    toppings VARCHAR(100), -- 加料
    sweetness VARCHAR(20),
    ice_level VARCHAR(20),
    buyer_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 測試資料
INSERT INTO rd_drinks.users (username, password, display_name, role) VALUES
('admin', 'adminpass', '管理員', 'admin'),
('user1', 'user1pass', '小明', 'user'),
('user2', 'user2pass', '小美', 'user');

INSERT INTO rd_drinks.vendors (name, description) VALUES
('五十嵐', '知名連鎖飲料店'),
('清心福全', '台灣手搖飲品牌');

INSERT INTO rd_drinks.menus (vendor_id, menu_date, image_url, created_by) VALUES
(1, CURRENT_DATE, 'https://example.com/menu1.jpg', 1),
(2, CURRENT_DATE + INTERVAL '1 day', 'https://example.com/menu2.jpg', 1);

INSERT INTO rd_drinks.menu_items (menu_id, name, price, options) VALUES
(1, '珍珠奶茶', 50, '{"toppings": ["珍珠", "椰果"], "sweetness": ["正常", "半糖", "微糖", "無糖"], "ice": ["正常", "少冰", "微冰", "去冰", "熱飲"]}'),
(1, '紅茶拿鐵', 45, '{"toppings": ["珍珠", "椰果"], "sweetness": ["正常", "半糖", "微糖", "無糖"], "ice": ["正常", "少冰", "微冰", "去冰", "熱飲"]}'),
(2, '綠茶', 35, '{"toppings": ["椰果"], "sweetness": ["正常", "半糖", "微糖", "無糖"], "ice": ["正常", "少冰", "微冰", "去冰", "熱飲"]}');

INSERT INTO rd_drinks.orders (user_id, order_date) VALUES
(2, CURRENT_DATE),
(3, CURRENT_DATE);

INSERT INTO rd_drinks.order_items (order_id, menu_item_id, drink_name, toppings, sweetness, ice_level, buyer_name) VALUES
(1, 1, '珍珠奶茶', '珍珠', '半糖', '少冰', '小明'),
(2, 2, '紅茶拿鐵', '椰果', '微糖', '去冰', '小美');
