import pandas as pd
import numpy as np
import re
from io import StringIO

raw_csv = """order_id,customer,city,order_date,amount,quantity,channel,email
1001,  Alice  ,Helsinki ,2025-01-05,"€1,200.50",2,Web,alice@example.com
1002,bob, helsinki,01/06/2025,1200,1,web,Bob@Example.com
1003,Charlie,Espoo,2025/01/07, ,3,Store,charlie@example.com
1003,Charlie,Espoo,2025/01/07, ,3,Store,charlie@example.com
1004,Dana,Vantaa,2025-13-01,"1.050,00 €",1,In-Store,dana@example
1005,Eve,Turku,2025-01-09,-50,1,WEB,eve@example.com
"""

df = pd.read_csv(StringIO(raw_csv))

print("BEFORE:\n", df, "\n")
print(df.dtypes, "\n")


# --- Helper: parse messy currency/number strings into floats ---
def parse_amount(x):
    if pd.isna(x):
        return np.nan
    s = str(x).strip()
    if s == "":
        return np.nan

    # remove currency symbols and spaces
    s = s.replace("€", "").replace(" ", "")

    # Heuristic for separators:
    # - if both '.' and ',' present: decide which is decimal by last occurrence
    # - if only ',' present: treat as decimal comma
    # - else: normal float
    if "," in s and "." in s:
        if s.rfind(",") > s.rfind("."):
            # 1.234,56 -> 1234.56
            s = s.replace(".", "").replace(",", ".")
        else:
            # 1,234.56 -> 1234.56
            s = s.replace(",", "")
    elif "," in s and "." not in s:
        # 1050,00 -> 1050.00
        s = s.replace(",", ".")

    try:
        return float(s)
    except ValueError:
        return np.nan


# 1) Strip whitespace + standardize casing for text fields
df["customer"] = df["customer"].astype(str).str.strip().str.title()
df["city"] = df["city"].astype(str).str.strip().str.title()

# 2) Standardize categories (channel)
df["channel"] = df["channel"].astype(str).str.strip().str.lower()
df["channel"] = df["channel"].replace({
    "web": "web",
    "in-store": "store",
    "store": "store",
})

# 3) Parse dates safely (coerce invalid to NaT)
# dayfirst=True makes "01/06/2025" parse as 1 June 2025 (common in Europe)
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce", dayfirst=True)

# 4) Convert amount + quantity to numeric
df["amount"] = df["amount"].apply(parse_amount)
df["quantity"] = pd.to_numeric(df["quantity"], errors="coerce")

# 5) Remove duplicate rows (or duplicates by key)
df = df.drop_duplicates()

# 6) Handle missing values
# Example: fill missing amount with median (simple, explainable)
df["amount"] = df["amount"].fillna(df["amount"].median())

# 7) Validate / flag suspicious records
df["invalid_email"] = ~df["email"].astype(str).str.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
df["negative_amount"] = df["amount"] < 0
df["bad_date"] = df["order_date"].isna()

# Option A: keep rows but show flags (good for audit)
under_review = df[df[["invalid_email", "negative_amount", "bad_date"]].any(axis=1)]

# Option B: filter to “clean enough” rows
clean_df = df[~df[["invalid_email", "negative_amount", "bad_date"]].any(axis=1)].copy()

print("AFTER (with flags):\n", df, "\n")
print("Rows needing review:\n", under_review, "\n")
print("CLEAN OUTPUT:\n", clean_df, "\n")
print(clean_df.dtypes)
