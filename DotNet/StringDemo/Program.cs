string a = "ABCD";
string b = "BCDE";

// read individual characters
char firstCharOfA = a[0];
char secondCharOfB = b[1];

// append strings
a += "!";  // a = a + "!"
string appended = a + b;

DateTime now = DateTime.Now;
string dateString = "Today's date is: " + now.ToString("D");