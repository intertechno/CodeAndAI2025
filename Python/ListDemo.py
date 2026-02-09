numbers = [1, 2, 3, 4, 5]

numbers.append(6)
numbers.remove(2)
print(numbers)

for number in numbers:
    print("Current number:", number)

total = sum(numbers)
print("Total sum:", total)
