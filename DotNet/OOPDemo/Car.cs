public class Car
{
    // Properties
    public string Make { get; set; } = "";
    public string Model { get; set; } = "";
    public int CurrentSpeed { get; set; }
    public bool EngineRunning { get; set; }

    // Methods
    public void StartEngine()
    {
        EngineRunning = true;
    }

    public void StopEngine()
    {
        EngineRunning = false;
    }

    public void Accelerate()
    {
        if (EngineRunning)
        {
            CurrentSpeed += 10;
        }
        else
        {
            throw new InvalidOperationException(
                "Cannot accelerate: Engine is not running. " +
                "Call the method \"StartEngine()\" first.");
        }
    }

    public void Decelerate()
    {
        CurrentSpeed -= 10;
        if (CurrentSpeed < 0)
        {
            CurrentSpeed = 0;
        }
    }
}
