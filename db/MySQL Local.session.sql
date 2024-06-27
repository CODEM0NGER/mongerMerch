USE myalbumDB;

-- Drop the foreign key constraint in the Hats table
ALTER TABLE Mugs DROP FOREIGN KEY mugs_ibfk_1;

-- Now you can drop the Products table
DROP TABLE IF EXISTS Products;

-- Proceed to drop the other tables
DROP TABLE IF EXISTS OrderItems;
DROP TABLE IF EXISTS CartItems;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Shirts;
DROP TABLE IF EXISTS Hats;
DROP TABLE IF EXISTS Pants;
DROP TABLE IF EXISTS Stickers;
DROP TABLE IF EXISTS Mugs;
