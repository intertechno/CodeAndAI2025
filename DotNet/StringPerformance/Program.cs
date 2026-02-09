    using System.Text;

Console.WriteLine("String Concatenation Performance Test");
StringBuilder sb = new();
DateTime start = DateTime.Now;

for (int i = 0; i < 600_000; i++)
{
    sb.Append('A');
}

string s = sb.ToString();
DateTime end = DateTime.Now;
TimeSpan duration = end - start;
Console.WriteLine($"Time taken for concatenation: {duration.TotalSeconds} secs");

/*
Console.WriteLine("String Concatenation Performance Test");
string s = "";
DateTime start = DateTime.Now;

for (int i = 0; i < 600_000; i++)
{
    s = s + "A";
}

DateTime end = DateTime.Now;
TimeSpan duration = end - start;
Console.WriteLine($"Time taken for concatenation: {duration.TotalSeconds} secs");
*/