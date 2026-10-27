package loop;

public class Palindrome {

	public static void main(String[] args) {
		int num=121;
		int temp,rem,rev=0;
		temp=num;
		while(num!=0)
		{
			rem=num%10;
			rev=rev*10+rem;
			num=num/10;
			
		}
		if(rev==temp)
		{
			System.out.println("It is a Palindrome number");
		}
		else{
			System.out.println("It is  not a  Palindrome number");
		}
	}

}
