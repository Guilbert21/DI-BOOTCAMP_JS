-- CREATE TABLE Customer (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(50),
--   last_name VARCHAR(50) NOT NULL
-- );

--  CREATE TABLE Customer_profile (
--   id SERIAL PRIMARY KEY,
--   isLoggedIn BOOLEAN DEFAULT false,
--   customer_id INTEGER REFERENCES Customer(id)
-- );

--  INSERT INTO Customer (first_name, last_name) VALUES
--   ('John', 'Doe'),
--   ('Jerome', 'Lalu'),
--   ('Lea', 'Rive');

-- SELECT * FROM Customer_profile;

-- INSERT INTO Customer_profile (isLoggedIn, customer_id) VALUES
--   (true, (SELECT id FROM Customer WHERE first_name = 'John')),
--   (false, (SELECT id FROM Customer WHERE first_name = 'Jerome')),
--   (false, (SELECT id FROM Customer WHERE first_name = 'Lea'));

-- SELECT Customer.first_name 
-- FROM Customer
-- JOIN Customer_profile 
-- ON Customer.id = Customer_profile.customer_id 
-- WHERE Customer_profile.isLoggedIn = true;

-- CREATE TABLE Book (
--   book_id SERIAL PRIMARY KEY,
--   title VARCHAR(100) NOT NULL,
--   author VARCHAR(100) NOT NULL
-- );

-- INSERT INTO Book (title, author) VALUES
--   ('Alice In Wonderland', 'Lewis Carroll'),
--   ('Harry Potter', 'J.K Rowling'),
--   ('To kill a mockingbird', 'Harper Lee');

-- CREATE TABLE Student (
--   student_id SERIAL PRIMARY KEY,
--   name VARCHAR(50) NOT NULL UNIQUE,
--   age INTEGER NOT NULL CHECK (age <= 15)
-- );

-- INSERT INTO Student (name, age) VALUES
--   ('John', 12),
--   ('Lera', 11),
--   ('Patrick', 10),
--   ('Bob', 14);

-- CREATE TABLE Library (
--   book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--   student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--   borrowed_date DATE,
--   PRIMARY KEY (book_fk_id, student_fk_id)
-- );

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM student WHERE name = 'John'),
--     '2022-02-15'
-- );

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
--     (SELECT student_id FROM student WHERE name = 'Bob'),
--     '2021-03-03'
-- );

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM student WHERE name = 'Lera'),
--     '2021-05-23'
-- );

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM student WHERE name = 'Bob'),
--     '2021-08-12'
-- );