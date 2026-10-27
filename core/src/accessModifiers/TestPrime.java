package accessModifiers;

public class TestPrime {
		public static void main (String args[])
		{
			int num;
			num=23;
			boolean isPrime=true;
			int n=num/2;
			for(int i=2;i<=n;i++)
			{
				if(num%i==0)
				{
					isPrime=false;
					break;
				}
			}
			if(isPrime)
			{
				System.out.println(num+" is prime");
			}
			else {
				System.out.println(num+" is not prime");
			}
		}
		}


