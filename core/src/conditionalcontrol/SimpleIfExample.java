package conditionalcontrol;

import java.util.Scanner;

public class SimpleIfExample {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int a,b;
		System.out.println("enter a and b values");
		a=sc.nextInt();
		b=sc.nextInt();
		if(a>b)
		{
			System.out.println(a+"is greatest");
		}
		else
		{
		
			System.out.println(b+"is greatest10"
					+ "");	
			}
	}

}
