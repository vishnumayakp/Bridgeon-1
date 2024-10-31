using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Operators
    {
        int Number1 = 100;
        int Number2 = 50;
        public void printNumbers() {
            //Operators
            //Assignment - =
            //Arithemetic -  (+,*,/,-,%)
            //Comparison - (===,<=,>=,<,>,!==)
            //Logical = (&&,||,!)
            //Ternery = (? :)

            Console.WriteLine(Number1 + Number2);
            Console.WriteLine(Number1 - Number2);
            Console.WriteLine(Number1 * Number2);
            Console.WriteLine(Number1 / Number2);
            Console.WriteLine(Number1 % Number2);

            bool findanswer = Number1 > Number2 ? true : false;
            Console.WriteLine(findanswer);


        }
    }
}
