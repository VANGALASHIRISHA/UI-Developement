package core;

public class NestedIf {

	public static void main(String[] args) {
		String name;
        int m1,m2,m3,total;
        name="shirisha";
        m1=88;
        m2=78;
        m3=85;
        if(m1>=35 && m2>=35 && m3>=35)
        {
        	System.out.println(name+" is Pass");
        	total=m1+m2+m3;
        	System.out.println("Total= "+total);
        	if(total>249)
        	{
        		System.out.println("First class");
        	}
        	
        	else if (total>150 && total<250)
        	{
        	  System.out.println("Second class");
        	}
        	
        	else
        	{
        		System.out.println("Third class");
        	}
        }
        else
        {
        	System.out.println("name is Fail");
        }
	}
}
          