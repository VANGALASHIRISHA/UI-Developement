package accessModifiers;

public class AccountMain {
public static void main(String[] args) {
        Account ac=new Account();
         ac.setAccNo(3452678);
         ac.setName("sirisha");
		 ac.setEmail("siri@gmail.com");
		 ac.setAmount(3478);
		System.out.println("Account Holder Details");
		System.out.println(" ");
		System.out.println(ac.getAccNo());
		System.out.println(ac.getName());
		System.out.println(ac.getEmail());
		System.out.println(ac.getAmount()); 
}

}
