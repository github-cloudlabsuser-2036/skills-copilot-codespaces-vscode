using System;

class Program
{
    static void Main(string[] args)
    {
        int n = GetNumberOfElements();
        int[] numbers = GetNumbersFromUser(n);
        int total = Sum(numbers);

        Console.WriteLine("Sum of the numbers: " + total);
    }

    static int GetNumberOfElements()
    {
        Console.WriteLine("Enter the number of elements:");
        while (true)
        {
            if (int.TryParse(Console.ReadLine(), out int n) && n > 0)
            {
                return n;
            }
            Console.WriteLine("Invalid input. Please enter a positive integer.");
        }
    }

    static int[] GetNumbersFromUser(int n)
    {
        int[] numbers = new int[n];
        Console.WriteLine("Enter " + n + " integers:");
        for (int i = 0; i < n; i++)
        {
            while (true)
            {
                if (int.TryParse(Console.ReadLine(), out numbers[i]))
                {
                    break;
                }
                Console.WriteLine("Invalid input. Please enter a valid integer.");
            }
        }
        return numbers;
    }

    static int Sum(int[] numbers)
    {
        int total = 0;
        foreach (int number in numbers)
        {
            total += number;
        }
        return total;
    }
}