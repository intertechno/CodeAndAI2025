-- Practice 1a
SELECT *
FROM Customers
WHERE Country = "Finland"

-- Practice 1b
SELECT CustomerID
FROM Customers
WHERE CompanyName = "Que Delícia"

SELECT *
FROM Orders
WHERE CustomerID = "QUEDE"

-- Practice 1b, with subquery
SELECT *
FROM Orders
WHERE CustomerID = (SELECT CustomerID
                    FROM Customers
                    WHERE CompanyName = "Que Delícia")


-- Practice 1c
SELECT *
FROM Employees
WHERE City = "London" AND Country = "UK"

