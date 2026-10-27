package scannerr;
import java.util.Scanner;
public class TestScanner {
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		int id;
		char ch;
		String name;
		float m1,m2,m3;
		double total;
		boolean res;
		System.out.println("enter id ,initial,name,marks in 3 subjects");
		id=sc.nextInt();
		ch=sc.next().charAt(0);
		name=sc.next();
		m1=sc.nextFloat();
		m2=sc.nextFloat();
		m3=sc.nextFloat();
		
		total=m1+m2+m3;
		if(m1>=35 && m2>=35 && m3>=35)
		{
			System.out.println("Result = pass");
			System.out.println(id+" "+ch+" "+name+" "+total);
		}
		else
		{
			System.out.println("fail");
		}
		
		
		
		
		
	}

}
