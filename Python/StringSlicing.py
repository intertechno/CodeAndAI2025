s = "ABCDEFGHIJKL"
print(s)

# individual characters
print(s[0])   # A
print(s[5])   # F
print(s[-1])  # L       <-- print(s[len(s)-1])
print(s[-3])  # J       <-- print(s[len(s)-3])

# substrings (slices)
print(s[0:3])   # ABC     <-- from index 0 up to 3 (not including 3)
print(s[4:8])   # EFGH    <-- from index 4 up to 8 (not including 8)
print(s[3:])    # DEFGHIJKL  <-- from index 3 to the end
print(s[:5])    # ABCDE      <-- from the start up to index 5

# stepping
print(s[::2])   # ACEGIK    <-- every second character
print(s[::-1])  # LKJIHGFEDCBA  <-- the whole string reversed
