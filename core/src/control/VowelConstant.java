package control;

public class VowelConstant {

	public static void main(String[] args) {
		char ch='U';
		switch(ch)
		{
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'A':
		case 'E':
		case 'I':
		case 'O':
		case 'U':
		case 'u':System.out.println(ch +" is vowel");
		break;
		default:
			System.out.println(ch+" is constant ");			
		}
	}

}
