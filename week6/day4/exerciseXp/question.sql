-- Qu-1
-- SELECT first_name AS "First", last_name AS "Last" FROM employees;

-- Qu-2
-- SELECT DISTINCT department_id FROM employees;

-- Qu-3
-- SELECT * FROM employees ORDER BY first_name DESC;

-- Qu-4
-- SELECT first_name, last_name, salary, (salary+(salary*0.15)) AS "PF" FROM employees;

-- Qu-5
-- SELECT employee_id, concat(first_name, ' ', last_name) AS "Name", salary FROM employees ORDER BY salary ASC;

-- Qu-6
-- SELECT SUM(salary) FROM employees;

-- Qu-7 
-- SELECT MAX(salary) AS "Max salary", MIN(salary) AS "Min salary" from employees;

-- Qu-8
-- SELECT AVG(salary) AS "Average salary" FROM employees;

-- Qu-9
-- SELECT count(employee_id) AS "Number of employees" FROM employees;

-- Qu-10
-- SELECT UPPER(first_name) AS "First name" FROM employees;

-- Qu-11
-- SELECT SUBSTRING(first_name, 1,3) FROM employees;

-- Qu-12
-- SELECT concat(first_name, ' ', last_name) AS "FULL NAME" FROM employees;

-- Qu-13
-- SELECT first_name, last_name, length(concat(first_name,last_name)) AS "Length of names" FROM employees;

-- Qu-14
-- select * FROM employees WHERE first_name ~ '\d'

-- Qu-15
-- SELECT * FROM employees FETCH FIRST 10 ROWS ONLY;

-- PART 2    

-- Qu-1
-- SELECT last_name FROM employees WHERE salary > 10000 AND salary < 15000;

-- Qu-2
-- SELECT first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '1987-01-01 00:00:00' AND '1987-12-31 11:59:59';

-- Qu-3
