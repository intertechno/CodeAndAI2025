import unittest

def calculate_sum(a, b):
    return a + b

# --------------------------

class SimpleTestCase(unittest.TestCase):

    def testA(self):
        a = 100
        b = 200
        assert calculate_sum(a, b) == 300, "calculate_sum() doe not work correctly"

if __name__ == "__main__":
    unittest.main() # run all tests
