-- CREATE TABLE product_orders (
--   id INT PRIMARY KEY,
--   user_id INT NOT NULL,
--   order_date DATE NOT NULL
-- );

-- CREATE TABLE items (
--   id INT PRIMARY KEY,
--   order_id INT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   price DECIMAL(10,2) NOT NULL,
--   quantity INT NOT NULL,
--   FOREIGN KEY (order_id) REFERENCES product_orders(id)
-- );

-- CREATE TABLE users (
--   id INT PRIMARY KEY,
--   name VARCHAR(255) NOT NULL
-- );

-- CREATE FUNCTION calculate_order_total_price(order_id INT)
-- RETURNS DECIMAL(10,2) AS $$
-- DECLARE
--     total_price DECIMAL(10,2);
-- BEGIN
--     SELECT SUM(price * quantity) INTO total_price
--     FROM items
--     WHERE order_id = order_id;

--     RETURN total_price;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE OR REPLACE FUNCTION calculate_user_order_total_price(user_id INT, order_id INT)
-- RETURNS DECIMAL(10,2) AS $$
-- DECLARE
--     total_price DECIMAL(10,2);
-- BEGIN
--     SELECT SUM(items.price * items.quantity) INTO total_price
--     FROM items
--     INNER JOIN product_orders ON items.order_id = product_orders.id
--     WHERE product_orders.user_id = calculate_user_order_total_price.user_id AND items.order_id = calculate_user_order_total_price.order_id;

--     IF total_price IS NULL THEN
--         total_price := 0.00;
--     END IF;

--     RETURN total_price;
-- END;
-- $$ LANGUAGE plpgsql;
