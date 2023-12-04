-- CREATE TABLE item (id SERIAL,
-- 				  Furniture TEXT,
-- 				  price INTEGER);

-- CREATE TABLE customers (firstName VARCHAR(100),
-- 					   lastName VARCHAR(100));

-- INSERT INTO item (Furniture, price)
-- VALUES ('Small Desk', 100);
-- VALUES ('Large desk', 300);
-- VALUES ('FAN', 80);

-- INSERT INTO customers(firstName, lastName)
-- VALUES('Greg','Jones');
-- VALUES('Sandra','Jones');
-- VALUES('Scott','Scott');
-- VALUES('Trevor','Green');
-- VALUES('Melanie','Johnson');

-- SELECT * FROM customers;

-- QU1 All the items.
-- SELECT * FROM ITEM;

-- QU2 All the items with a price above 80 (80 not included).
-- SELECT * FROM item WHERE price >80;

-- QU3 All the items with a price below 300. (300 included)
-- SELECT * FROM item WHERE price <= 300

-- QU4 All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE lastName = 'Smith' answer:nothing output

-- QU5 All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE lastName = 'Jones'

-- QU6 All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE firstName != 'Scott'