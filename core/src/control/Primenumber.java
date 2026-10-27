package control;

public class Primenumber {

	public static void main(String[] args) {
	int limit=100;
	for(int n=2;n<=limit;n++) {
		boolean isPrime=true;
		for(int i=2;i<=Math.sqrt(n);i++)
		{
			if(n%i==0)
			{
				isPrime=false;
				break;
			}
		}
		if(isPrime) {
			System.out.println(n);
		}
	}

	}

}
