using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Typeconversion
    {
        public void conversionType()
        {
            // IMPLICIT CONVERSION
            int num = 10;
            double doubleNum = num;
            Console.WriteLine(doubleNum);

            // EXPLICIT CONVERSION
            double doubleNum1 = 200;
            int num1 = (int)doubleNum1;
            Console.WriteLine(num1);

            // USING CONVERT CLASS  (convert.ToInt32(),convert.ToDouble,convert.ToString(),convert.ToBoolean() )
             string str = "1234";
            int strNum = Convert.ToInt32(str);
            Console.WriteLine(strNum);

            // USING PARSE METHOD
            string str1 = "12345";
            int number = int.Parse(str1);
            Console.WriteLine(number);

            // USING TRYPARSE METHOD

            string strval = "123";
            bool success = int.TryParse(strval, out int num3); // safer string to int
            Console.WriteLine(num3);

            // BOXING AND UNBOXING
            int numval = 123;
            object obj = numval; // boxing
            Console.WriteLine(obj);
            int unboxedNum = (int)obj; // unboxing
            Console.WriteLine(unboxedNum);


        }
    }
}
