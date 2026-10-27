package control;

public class SwitchString {

	public static void main(String[] args) {
		String color="green";
		switch(color)
		{
		case "red":
			System.out.println("you choose red");
			break;
		case "blue":
			System.out.println("you choose blue color");
		case "green":
			System.out.println("you choose green");
			break;
			default:
				System.out.println("color is not matched");
		}
	}

}
