namespace RoarUI.Events;

public class RoarStepChangeEventArgs : EventArgs
{
    public StepperStepChangeEventArgs? Stepper { get; set; }
}
