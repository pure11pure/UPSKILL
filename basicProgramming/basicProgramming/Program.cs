using System;

namespace basicProgramming
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 20, 90 , 50, 60};

            for (int i = 0; i < numbers.Length; i++) { 
                Console.WriteLine(numbers[i]);
            }
            
            Console.ReadKey();
        }
    }
}
