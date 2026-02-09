-- Practice 2a
SELECT COUNT(*)
FROM Customers


-- Practice 2b
SELECT -- ProductName, UnitsInStock, UnitPrice,
       SUM(UnitsInStock * UnitPrice)
FROM Products

-- Practice 2c
SELECT *
FROM Products

SELECT SUM(UnitPrice * Quantity * (1 - Discount))
FROM [Order Details]
WHERE ProductID = 14 OR ProductID = 74

-- Practice 2c, with subqeury
SELECT SUM(UnitPrice * Quantity * (1 - Discount))
FROM [Order Details]
WHERE ProductID IN (SELECT ProductID
                    FROM Products
					WHERE ProductName LIKE "%tofu%")