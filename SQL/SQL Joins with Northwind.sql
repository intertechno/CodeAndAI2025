-- Practice 20/1
SELECT TOP 10
    o.OrderID,
    o.OrderDate,
    c.CompanyName
FROM Orders AS o
JOIN Customers AS c
    ON o.CustomerID = c.CustomerID
ORDER BY
    o.OrderDate DESC,
    o.OrderID DESC


-- Practice 20/2
SELECT TOP 15
    od.OrderID,
    p.ProductName,
    od.Quantity,
    od.UnitPrice,
    od.Quantity * od.UnitPrice AS LineTotal
FROM [Order Details] AS od
JOIN Products AS p
    ON od.ProductID = p.ProductID
ORDER BY
    od.OrderID,
    p.ProductName


-- Practice 20/3
SELECT
    c.CompanyName,
    COUNT(o.OrderID) AS NumberOfOrders
FROM Customers AS c
LEFT JOIN Orders AS o
    ON c.CustomerID = o.CustomerID
GROUP BY
    c.CompanyName
ORDER BY
    NumberOfOrders DESC,
    c.CompanyName
