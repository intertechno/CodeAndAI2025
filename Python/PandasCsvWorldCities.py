import pandas as pd

cities = pd.read_csv("worldcities.csv")

# the top 10 largest cities by population
# cities = cities.sort_values(["population"], ascending=False)
print(cities[:10])

# filtering rows by population between 500,000 and 1,000,000
print("-------------")

step1 = cities[cities["population"] >= 500000]
step2 = step1[step1["population"] <= 1000000]

print(step2.sort_values(["population"], ascending=False))

# ------- "oneliner" --------
print("-------------")
filtered = cities[cities["population"].between(500000, 1000000)]
print(filtered.sort_values(["population"], ascending=False))
