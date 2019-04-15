package pattern.decorator;

public class DarkRoast extends Beverage {

	public DarkRoast() {
		this.setName("Dark Roast");
	}

	@Override
	public double cost() {
		return .99d;
	}

}
