// create an instance of the Car class
Car myCar = new();
myCar.Make = "Toyota";
myCar.Model = "Corolla";
myCar.StartEngine();
myCar.Accelerate();
myCar.Accelerate();
myCar.Accelerate();
myCar.Accelerate();
myCar.EngineRunning = false;

// another way to create and initialize an instance of the Car class
Car anotherCar = new()
{
    Make = "Honda",
    Model = "Civic",
    CurrentSpeed = 10,
    EngineRunning = true
};
