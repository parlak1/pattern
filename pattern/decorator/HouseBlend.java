package pattern.decorator;

public class HouseBlend extends Beverage {

	public HouseBlend() {
		this.setName("House Blend");
	}

	@Override
	public double cost() {
		return .89d;
	}

}
