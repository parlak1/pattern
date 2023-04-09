package pattern.decorator;

public class Mocha extends CondimentDecorator {

	private Beverage beverage;
	
	private String name;

	public Mocha(Beverage beverage) {
		this.beverage = beverage;
		this.name = "Mocha";
	}

	@Override
	public String getName() {
		return this.beverage.getName() + ", " + this.name;
	}

	@Override
	public double cost() {
		return this.beverage.cost() + .2d;
	}

}
