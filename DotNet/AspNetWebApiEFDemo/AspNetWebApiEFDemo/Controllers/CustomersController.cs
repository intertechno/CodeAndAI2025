using AspNetWebApiEFDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiEFDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        [HttpGet("")]
        public List<Customer> ReadAllCustomers()
        {
            using NorthwindContext context = new();
            List<Customer> all = [.. context.Customers];
            return all;
        }
    }
}
