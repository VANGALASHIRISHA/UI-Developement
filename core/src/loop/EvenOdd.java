package loop;

public class EvenOdd {

	public static void main(String[] args) {
		int esum=0;
		int osum=0;
		for(int i=1;i<=10;i++)
		{
			if(i%2==0)
			{
		esum=esum+i;
			}
			else
	           {
				osum=osum+i;
			}
				
		}
		System.out.println("odd sum is ="+osum);
		System.out.println("even sum is ="+esum);

	}

}
