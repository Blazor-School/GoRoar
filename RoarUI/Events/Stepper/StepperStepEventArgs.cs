namespace RoarUI.Events;

/// <summary>
/// A snapshot of a step when a stepper navigation event is raised.
/// </summary>
public record StepperStepEventArgs(string Id, string Name, bool Completed, bool Loading, bool Disabled);
