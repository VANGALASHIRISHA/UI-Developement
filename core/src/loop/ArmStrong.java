package loop;

public class ArmStrong {

	public static void main(String[] args) {
		int num,rem,temp,sum;
		num=111;
		temp=num;
		sum=0;
		
		while(num!=0)
		{
			rem=num%10;
			sum=sum+(rem*rem*rem);
			num=num/10;
			System.out.println(sum);
		}
		if(temp==sum)
			{
				System.out.println("The number is armstrong number");
			}
		else {
			System.out.println("The number is not armstrong number");
		}
			
		}
		
	}


