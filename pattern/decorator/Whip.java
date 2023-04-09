package pattern.decorator;

public class Whip extends CondimentDecorator {

	private Beverage beverage;

	private String name;

	public Whip(Beverage beverage) {
		this.beverage = beverage;
		this.name = "Whip";
	}

	@Override
	public String getName() {
		return this.beverage.getName() + ", " + this.name;
	}

	@Override
	public double cost() {
		return this.beverage.cost() + .1d;
	}

}
