// generate a random number between 1 and 20
int correct = new Random().Next(1, 21);
// Console.WriteLine(correct);

for (int i = 0; i < 3; i++)
{
    // get user input
    Console.WriteLine("Please enter your guess (1-20):");
    string input = Console.ReadLine() ?? "0";
    int guess = int.Parse(input);
    // int guess = Convert.ToInt32(input);

    // test if the guess is correct
    if (guess == correct)
    {
        Console.WriteLine("You guessed it!");
        break;
    }
    else if (guess < correct)
    {
        Console.WriteLine("Too low!");
    }
    else
    {
        Console.WriteLine("Too high!");
    }
}
