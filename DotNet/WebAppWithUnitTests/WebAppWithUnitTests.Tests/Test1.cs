using WebAppWithUnitTests.Logic;

namespace WebAppWithUnitTests.Tests
{
    [TestClass]
    public sealed class Test1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Calculations calculations = new();
            int a = 100;
            int b = 200;

            int expected = a + b;
            int result = calculations.CalculateSum(a, b);

            Assert.AreEqual(expected, result);
        }
    }
}
