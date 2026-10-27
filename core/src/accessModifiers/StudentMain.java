package accessModifiers;

public class StudentMain {

	public static void main(String[] args) {
		Student st=new Student();
		st.setId(101);
		st.setName("siri");
		st.setAge(22);
		st.setCourse("cse");
		System.out.println(st.getId());
		System.out.println(st.getName());
		System.out.println(st.getAge());
		System.out.println(st.getCourse());
		
		
	}

}
