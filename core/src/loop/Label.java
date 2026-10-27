package loop;

public class Label {

	public static void main(String[] args) {
		System.out.println("using label");
		Rakesh:
			for(int i=1;i<=6;i++)
			{
				Ajay:
				for(int j=1;j<=6;j++)
				{
					if(i==3 && j==3)
						break Ajay;
						System.out.println(i+" "+j);
				}
			}

	}

}
