Person p1 = new();
p1.Name = "John Doe";
p1.Address = "123 Main St";
p1.Country = "USA";

Person p2 = new()
{
    Name = "Jane Smith",
    Address = "456 Oak Ave",
    Country = "Canada"
};

Person p3 = new() { Name = "Alice Johnson", Address = "789 Pine Rd", Country = "UK" };
Person p4 = new() { Name = "Noah Dubois", Address = "18 Rue de Lyon", Country = "France" };
Person p5 = new() { Name = "Olivia Rossi", Address = "9 Via Roma", Country = "Italy" };
Person p6 = new() { Name = "Lucas Silva", Address = "210 Avenida Paulista", Country = "Brazil" };
Person p7 = new() { Name = "Sofia García", Address = "33 Calle Mayor", Country = "Spain" };
Person p8 = new() { Name = "Ethan Brown", Address = "501 Market St", Country = "USA" };
Person p9 = new() { Name = "Ava Thompson", Address = "88 Queen St", Country = "Canada" };
Person p10 = new() { Name = "Jack Wilson", Address = "14 George St", Country = "Australia" };

Person p11 = new() { Name = "Mia Hansen", Address = "6 Nyhavn", Country = "Denmark" };
Person p12 = new() { Name = "Oliver Berg", Address = "27 Sveavägen", Country = "Sweden" };
Person p13 = new() { Name = "Isabella Novak", Address = "102 Václavské náměstí", Country = "Czech Republic" };
Person p14 = new() { Name = "William de Vries", Address = "59 Prinsengracht", Country = "Netherlands" };
Person p15 = new() { Name = "Charlotte Martin", Address = "71 Boulevard Haussmann", Country = "France" };
Person p16 = new() { Name = "James Smith", Address = "400 Oxford St", Country = "UK" };
Person p17 = new() { Name = "Amelia Kowalski", Address = "23 Nowy Świat", Country = "Poland" };
Person p18 = new() { Name = "Benjamin Fischer", Address = "8 Bahnhofstraße", Country = "Switzerland" };
Person p19 = new() { Name = "Haruto Tanaka", Address = "2-15 Shibuya", Country = "Japan" };
Person p20 = new() { Name = "Yara Haddad", Address = "91 Hamra St", Country = "Lebanon" };
Person p21 = new() { Name = "Mikko Virtanen", Address = "12 Mannerheimintie", Country = "Finland" };
Person p22 = new() { Name = "Laura Korhonen", Address = "8 Aleksanterinkatu", Country = "Finland" };
Person p23 = new() { Name = "Jari Nieminen", Address = "25 Hämeenkatu", Country = "Finland" };


// declaring a generic list of Person objects
/*
List<Person> people = new();
people.Add(p1);
people.Add(p2);
people.Add(p3);
*/

// List<Person> people = new() { p1, p2, p3 };

List<Person> people = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
                       p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
                       p21, p22, p23];


// LINQ query syntax
/*
var finnishPeople = from person in people
                    where person.Country == "Finland"
                    select person;
*/

/*
List<Person> finnishPeople = (from person in people
                    where person.Country == "Finland"
                    select person).ToList();
*/

List<Person> finnishPeople = [.. from person in people
                    where person.Country == "Finland"
                    select person];

foreach (Person person in finnishPeople)
{
    Console.WriteLine($"{person.Name} from {person.Country}");
}







/*
// empty list
// List<int> emptyList = new List<int>();
List<int> emptyList = [];
*/
