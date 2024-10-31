using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class MethodOver
    {
        public void MethodOverriding()
        {
            int add(int x,int y)
            {
                return x + y;
            }
            double addval(double x,double y)
            {
                return x + y;
            }

            int addvalues(int x, int y, int z)
            {
                return x + y + z;
;            }
            Console.WriteLine(add(1, 2));
            Console.WriteLine(addval(1.2, 2.3));
            Console.WriteLine(addvalues(1, 2, 3));
        }
    }
}
