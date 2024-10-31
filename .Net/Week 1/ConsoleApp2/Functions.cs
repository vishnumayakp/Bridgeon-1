using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Functions
    {
        public void typeFunctions()
        {
            // NORMAL FUNCTION
            void message()
            {
                Console.WriteLine("Hello world");
            }
            message();


            // FUNCTIONS WITH PARAMETERS
            void sum(int a, int b)
            {
                 Console.WriteLine( a + b);
            }
            sum(10, 20);
            sum(1000, 900);

            // FUNCTION WITH RETURN TYPE WITH PARAMETER

            int findSquare(int x)
            {
                int result = x * x;
                return result;
            }
            int square = findSquare(10);
            Console.WriteLine(square);



            int largeNum(int num1, int num2)
            {
                int result;
                if (num1 > num2)
                {
                    result = num1;
                }
                else
                {
                    result = num2;
                }
                return result;
            }
            int result = largeNum(10,20);
            Console.WriteLine(result);


            //PASS BY VALUE
            void increment(int num)
            {
                num++;
            }
            int number = 5;
            increment(number);
            Console.WriteLine(number);


            //PASS BY REFERENCE
            void decrement(ref int val)
            {
                val++;
            }
            int integer=5;
            decrement(ref integer);
            Console.WriteLine(integer);


            void reference(out int num)
            {
                 num = 10;
            }
            int value;
            reference(out value);
            Console.WriteLine(value);

        }
    }
}
