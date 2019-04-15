package pattern.decorator;


public class TestDecorator {

	public static void main(String[] args) {
		Beverage beverage1 = new Espresso();
//		beverage1 = new Soy(beverage1);
		System.out.println(beverage1.getName() + ": $" + beverage1.cost());
		
		Beverage beverage2 = new DarkRoast();
		beverage2 = new Mocha(beverage2);
		beverage2 = new Mocha(beverage2);
		beverage2 = new Whip(beverage2);
		beverage2 = new Soy(beverage2);
		System.out.println(beverage2.getName() + ": $" + beverage2.cost());

		Beverage beverage3 = new HouseBlend();
		beverage3 = new Mocha(beverage3);
		beverage3 = new Mocha(beverage3);
		beverage3 = new Mocha(beverage3);
		System.out.println(beverage3.getName() + ": $" + beverage3.cost());
		
		
	}

}
