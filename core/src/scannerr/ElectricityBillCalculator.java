import java.util.Scanner;

public class ElectricityBillCalculator {
public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);
		System.out.println(" enter the number of untis consumed");
		int units=sc.nextInt();
		double bill=0;
		if(units<=100) {
			bill=units*2.0;
		}
		else if(units<=200) {
			bill=(100*2.0)+((units-100)*3);
		}
		else {
			bill=(100*2.0)+(100*3.0)+((units-200)*5.0);
		}
		if(bill>1000) {
			bill=bill-(bill*0.1);
			System.out.println("A 10% discount has been applied.");
		}
		System.out.println("your total electricity bill is :rupee"+bill);
		
	}

}
