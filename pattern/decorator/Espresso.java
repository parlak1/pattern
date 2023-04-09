package pattern.decorator;

public class Espresso extends Beverage {

	public Espresso() {
		this.setName("Espresso");
	}

	@Override
	public double cost() {
		return 1.99d;
	}

}
