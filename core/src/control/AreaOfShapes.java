package control;

public class AreaOfShapes {

	public static void main(String[] args) {
		int radius,height,breadth,side;
	    double area;
		radius=6;
		height=8;
		breadth=9;
		side=6;
		System.out.println("1.area of cirxle 2.area of rectangale 3.area of triangle 4.area of square");
		int ch=1;
		switch(ch)
		{
		case 1:
		area=3.14 *radius*radius;
		System.out.println("Area of Circle is="+area);
		break;
		case 2:
			area=height*breadth;
			System.out.println("Area of Rectangle is="+area);
			break;
		case 3:
			area=0.5 *height*breadth;
			System.out.println("Area of Triangle is="+area);
			break;
			case 4:
				area=side*side;
				System.out.println("Area of Square is="+area);
				break;
				default:System.out.println("Enter correct choice");
		}

	}

}
