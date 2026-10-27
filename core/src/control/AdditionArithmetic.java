package control;

public class AdditionArithmetic {

	public static void main(String[] args) {
		int n,m,res;
		m=28;
		n=5;
		System.out.println("1.+ 2.- 3.* 4./ 5.% ");
		char ch='+';
	    switch(ch)
	    {
	    	case '+':
	    		res=n+m;
	    	System.out.println("Addition  ="+res);
	    	break;
	    	case '-':
	    		res=n-m;
	    	System.out.println("substarction  ="+res);
	    	break;

	    	case '*':
	    		res=n*m;
	    	System.out.println("multiplication ="+res);
	    	break;
	    	case '/':
	    		res=m/n;
	    	System.out.println("division ="+res);
	    	break;
	    	case '%':
	    		res=m%n;
	    	System.out.println("modulus ="+res);
	    	break;
	    	default:
	    		System.out.println("wrong choice please enter correct choice");
	    	
	    }
		

	}

}


