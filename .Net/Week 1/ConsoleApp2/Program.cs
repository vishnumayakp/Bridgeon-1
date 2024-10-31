namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // strings
            string s = "Haiii world";
            Console.WriteLine(s);

            // Escaping sequence \ character = \
            string value = "Hello\"wrold\"";
            Console.WriteLine(value);
            string str = "D:\\Bridgeon\\.Net\\week 1";
            Console.WriteLine(str);

            // verbatim literals = @
            string str1 = @"D:\Bridgeon\.Net\week 1";
            Console.WriteLine(str1);
            Console.WriteLine(str1.Length);
            Console.WriteLine(str1.ToUpper());

            //index starts with 0
            Console.WriteLine(str1[0]);

            //Operators op = new Operators();
            //op.printNumbers();

            //Typeconversion type = new Typeconversion();
            //type.conversionType();

            //Loop lp = new Loop();
            //lp.loopvalues();

            Functions fn = new Functions();
            fn.typeFunctions();

            MethodOver mo = new MethodOver();
            mo.MethodOverriding();
        }
    }
}
