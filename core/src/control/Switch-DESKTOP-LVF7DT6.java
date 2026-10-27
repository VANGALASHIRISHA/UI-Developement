package control;

public class Switch {

	public static void main(String[] args) {
		int a,b,res;
		a=50;
		b=4;
		System.out.println("1.Addition 2.sub 3.mul 4.div 5.modulus ");
		int ch = 1;
	    switch(ch)
	    {
	    	case 1:
	    		res=a+b;
	    	System.out.println("Addition  ="+res);
	    	break;
	    	case 2:
	    		res=a-b;
	    	System.out.println("substarction  ="+res);
	    	break;

	    	case 3:
	    		res=a*b;
	    	System.out.println("multiplication ="+res);
	    	break;
	    	case 4:
	    		res=a/b;
	    	System.out.println("division ="+res);
	    	break;
	    	case 5:
	    		res=a%b;
	    	System.out.println("modulus ="+res);
	    	break;
	    	default:
	    		System.out.println("wrong choice please enter correct choice");
	    	
	    }
		

	}

}
