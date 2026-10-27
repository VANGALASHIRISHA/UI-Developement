package core;

public class Student {

	public static void main(String[] args) {
		 int Sid;
		 String  name;
		 double mark1,mark2,mark3;
		 double calculatesum;
		 double calculateavg;
		Sid=101;
		name="geetha";
		mark1=65;
		mark2=63;
		mark3=69;
		calculatesum=mark1+mark2+mark3;
		calculateavg=calculatesum/3;
	System.out.println("Student id is "+Sid);
	System.out.println("Student  name is "+name);
	System.out.println("student 3 subjects marks sum is "+calculatesum);
	System.out.println("student avg is "+calculateavg);			
	}
}
