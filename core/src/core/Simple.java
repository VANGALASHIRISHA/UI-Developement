package core;

public class Simple {
	public static void main(String args[])
	{
		int a,b,c,d;
		a=56;
		b=162;
		c=178;
		d=99;
		if(a>b && a>c && a>d)
		{
			System.out.println(a+ " is the greatest");
		}
		else if( b>c && b>d)
		{
			System.out.println(b+ " is the greatest");
			
		}
		else if(c>d)
		{
			System.out.println(c+ " is the greatest");
		}
		else
		{
			System.out.println(d+" is the greatest");
		}
		
	}
	

}
