package arrays;


import java.util.Scanner;
		public class EvensumOddsum {

			public static void main(String[] args) {
				// TODO Auto-generated method stub
				Scanner sc= new Scanner(System.in);
				System.out.println("enter n value");
				int n= sc.nextInt();
				int esum=0,odsum=0;
				for(int i=1;i<=n;i++)
				{//1<=10 2<=10 3<=10
					if(i%2==0)//2%2==0 3%2==0 no
					{//1%2 ==0
						esum=esum+i;//0+2
					}
					else
					{
						odsum=odsum+i;//0+1+3
					}
				}
				System.out.println("Evensum = "+ esum);
				System.out.println("Oddsum= "+odsum);

	}

}
