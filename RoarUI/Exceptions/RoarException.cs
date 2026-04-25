namespace RoarUI.Exceptions;

public class RoarException : Exception
{
    public RoarException(string message) : base(message)
    {

    }

    public RoarException(string message, Exception inner) : base(message, inner)
    {

    }
}
