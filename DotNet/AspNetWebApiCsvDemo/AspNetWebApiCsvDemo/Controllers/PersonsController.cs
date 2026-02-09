using AspNetWebApiCsvDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiCsvDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        [HttpGet("")]
        public List<Person> ReadCsvData()
        {
            // read the CSV data and split the data into Person objects
            const string CsvFilePath = @"C:\Academy\CodeAndAI\DotNet\AspNetWebApiCsvDemo\AspNetWebApiCsvDemo\PersonData.csv";
            List<Person> data = [];
            string[] lines = System.IO.File.ReadAllLines(CsvFilePath);

            int counter = 0;
            foreach (string line in lines)
            {
                counter++;
                if (counter == 1) continue;

                string[] parts = line.Split(',');
                data.Add(new Person {
                    Number = int.Parse(parts[0]),
                    Name = parts[1],
                    BirthDate = parts[2]
                });
            }

            // return the person data
            return data;
        }
    }
}
