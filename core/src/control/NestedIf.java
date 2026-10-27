package control;

public class NestedIf {

	public static void main(String[] args) {
		String location="Urban";
		int ordervalue=500;
		if(location.equals("urban"))
		{
			if(ordervalue>500 )
			{
				System.out.println("delivery in one day ");
			}
			
		}
		else if(location.equals("rural"))
		{
			if(ordervalue>1000)
			{
				System.out.println("delivaery in 3 days");
			}
			
		}
		else {
			System.out.println("delivery in 5 days");
		}
	}

}
