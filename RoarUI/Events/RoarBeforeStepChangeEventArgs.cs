namespace RoarUI.Events;

public class RoarBeforeStepChangeEventArgs : EventArgs
{
    public StepperStepChangeEventArgs? Stepper { get; set; }
}
