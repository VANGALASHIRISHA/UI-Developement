package control;

public class IfelseIf {

	public static void main(String[] args) {
		double sub1,sub2,sub3,sub4,sub5;
		double calculatesum;
		double average;
		sub1=76;
		sub2=88;
		sub3=58;
		sub4=89;
		sub5=96;
		calculatesum=sub1+sub2+sub3+sub4+sub5;
		average=calculatesum/5;
		System.out.println("Total marks of the Student=" +calculatesum);
		System.out.println("Average marks of the Student=" +average);
		if(average>=90 && average<=100)
		{
			System.out.println("Grade A");
		}
		else if(average>=80 && average<=89)
		{
			System.out.println("Grade B");
		}
		else if(average>=70 && average<=79)
		{
			System.out.println("Grade c");
		}
		else if(average>=60 && average<=69)
		{
			System.out.println("Grade D");
		}
		else if(average>=50 && average<=69)
		{
			System.out.println("Grade B");
		}
		else
			System.out.println("F");
	
	}

}
