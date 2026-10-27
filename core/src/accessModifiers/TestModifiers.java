package accessModifiers;
 class People
{
	public int Sid;
	protected String name; 
	private int age;
}
public class TestModifiers {

	public static void main(String[] args) {
		 People pe=new People();
		pe.Sid=101;
		pe.name="shirisha";
		System.out.println(pe.Sid+" "+pe.name);
		
	}

