numbers = []
while True:

    print("Please enter a number between 1 and 99 (enter 0 to stop): ")
    number = input()

    value = int(number)
    # print("You entered the number:", value)

    if value == 0:
        break
    numbers.append(value)

print("Numbers entered:", numbers)

 # Calculate the frequency of how many numbers the user
 # entered by each group of ten, that is, between 1-9,
 # 10-19, 20-29, etc.
frequencies = [0] * 10    # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for number in numbers:
    index = number // 10
    frequencies[index] += 1
print("Frequencies:", frequencies)

print("Number frequencies by group of ten:")
for i in range(len(frequencies)):   
    lower_bound = i * 10
    upper_bound = lower_bound + 9
    if i == 0:
        lower_bound = 1
    print(f"Numbers between {lower_bound} and {upper_bound}: {frequencies[i]}")
