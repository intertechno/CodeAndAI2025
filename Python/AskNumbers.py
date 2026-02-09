numbers = []
while True:

    print("Please enter a number: ")
    number = input()

    value = int(number)
    print("You entered the number:", value)

    if value == 0:
        break
    numbers.append(value)

print("Program ends.")
print("Numbers entered:", numbers)
