function sum(a: number, b: number, c: number): number
{
    return a + b + c;
}

let personName: string = "Alice";
console.log(`Hello, ${personName}! Welcome to the demo.`);

let total: number = sum(5, 10, 15);
console.log(`The total sum 1 is: ${total}`);

total = sum(5, 10, 0);
console.log(`The total sum 2 is: ${total}`);

let numbers: number[] = [1, 2, 3];
console.log(`Updated numbers are: ${numbers}`);
