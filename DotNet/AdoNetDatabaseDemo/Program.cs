// dotnet add package Microsoft.Data.Sqlite
using Microsoft.Data.Sqlite;

using var connection = new SqliteConnection("Data Source=C:\\Users\\Koulutus\\Desktop\\northwind.db");

connection.Open();
Console.WriteLine("Connection to database established.");

using var command = connection.CreateCommand();
command.CommandText = """
    SELECT CompanyName
    FROM Customers
    WHERE Country = 'Finland'
""";
// command.Parameters.AddWithValue("$id", id);

using var reader = command.ExecuteReader();

while (reader.Read())
{
    var company = reader.GetString(0);

    Console.WriteLine(company);
}
reader.Close();
command.Dispose();

// -----------------------------

Console.WriteLine("Enter product name to search for:");
string product = Console.ReadLine() ?? "";

using var command2 = connection.CreateCommand();
command2.CommandText = """
    SELECT UnitPrice
    FROM Products
    WHERE ProductName = $name
""";
command2.Parameters.AddWithValue("$name", product);

using var reader2 = command2.ExecuteReader();

while (reader2.Read())
{
    var price = reader2.GetDecimal(0);

    Console.WriteLine($"The price of {product} is {price}.");
}

connection.Close();
