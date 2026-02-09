using EntityFrameworkDemo.Models;

NorthwindContext context = new();

// find all Finnish customers from the Customers table
List<Customer> finnishCustomers = [.. from c in context.Customers
                                      where c.Country == "Finland"
                                      select c];

// display the customers on the screen
foreach (Customer customer in finnishCustomers)
{
    Console.WriteLine(customer.CompanyName);
}
