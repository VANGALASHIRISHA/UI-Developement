package control;

public class MenuDriven {

	public static void main(String[] args) {
		String menu= "pizza";
		System.out.println("1.pizza 2.Burger 3.Sandwich 4.Cofee");
		switch(menu)
		{
		case "pizza":
		System.out.println("user want pizza");
			break;
		case "Burger":
			System.out.println("user want Burger");
			break;
		case "Sandwich":
			System.out.println("user want Sandwich");
				break;
			case "Coffe":
				System.out.println("user want Cofee");
				break;
				default:
					System.out.println("invalid choice");
			
			
		}

	}

}
