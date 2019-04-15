package pattern.decorator;

public class Soy extends CondimentDecorator {

	private Beverage beverage;

	private String name;

	public Soy(Beverage beverage) {
		this.beverage = beverage;
		this.name = "Soy";
	}

	@Override
	public String getName() {
		return this.beverage.getName() + ", " + this.name;
	}

	@Override
	public double cost() {
		return this.beverage.cost() + .15d;
	}

}
