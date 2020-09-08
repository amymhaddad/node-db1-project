



-- Database Queries
-- \d  - returns all tables
-- See all columns in a table: select * from tableName;
--  \d+ tableName --> find out the col requirements for a table

-- Find all customers with postal code 1010
-- select postal_code from customers where postal_code='1010' limit 3;

-- Find the phone number for the supplier with the id 11
-- select * from suppliers where supplier_id=11;

-- List first 10 orders placed, sorted descending by the order date
-- select * from orders order by order_date asc limit 10;

-- Find all customers that live in London, Madrid, or Brazil
-- select * from us_states where state_name in ('Ohio', 'Iowa', 'Vermont');

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
-- insert into customers (customer_id, company_name, contact_name) values (1, 'c1', 'Nanc');

-- Update Bilbo Baggins record so that the postal code changes to "11122"
-- update customers set company_name='c2' where company_name='c1';

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
-- select count(distinct city) from customers;

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
-- select * from suppliers where length(contact_name) > 20;