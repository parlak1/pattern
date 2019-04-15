package pattern.decorator;

public abstract class Beverage {

	private String name;

	public Beverage() {
		name = "Unknown Beverage";
	}

	public abstract double cost();

	// getters and setters ....................................................

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
