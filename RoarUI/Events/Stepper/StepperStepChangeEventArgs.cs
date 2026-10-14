namespace RoarUI.Events;

public record StepperStepChangeEventArgs(string Name, string? PreviousName, StepperStepEventArgs Step, StepperStepEventArgs? PreviousStep);
