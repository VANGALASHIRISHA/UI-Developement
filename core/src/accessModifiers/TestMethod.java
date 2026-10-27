package accessModifiers;
class Calculate
{
	public void addNum(int a,int b)
	{
		int c =a+b;
		System.out.println("sum = "+c);
	}
	public int square(int num)
	{
		return (num*num);
	}
public void factorial(int fact,int i)
{
	fact=5;
	for(i=4;i>=1;i++)
	{
	fact=fact *i;
}
}
}

public class TestMethod {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculate ct=new Calculate();
		ct.addNum(14, 10);
		System.out.println(ct.square(8));
		int res=ct.square(9);
		System.out.println(res);
		ct.factorial(5,1);
}
}