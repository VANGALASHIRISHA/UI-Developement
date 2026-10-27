package loop;

public class ForBreak {

	public static void main(String[] args) {
	for(int i=1;i<=10;i++)
	{
		if(i==6)
		break;
		System.out.println(i);
	}
	System.out.println("Using continue");
	for(int i=1;i<=10;i++)
	{
		if(i==6)
		continue;
		System.out.println(i);
	}

	}

}
