package pattern.decorator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public abstract class Beverage0 {

	private String name;

	private Float cost;

	private List<Condiment0> condiments;

	public Beverage0() {
		this.condiments = new ArrayList<>();
	}

	public Float calculateCost() {
		return this.cost + (float) condiments.stream().mapToDouble(x -> x.getCost()).sum();
	}
	
	public void addCondiment(Condiment0... condiments) {
		this.condiments.addAll(Arrays.asList(condiments));
	}

	public void removeCondiment(Condiment0... condiments) {
		this.condiments.removeAll(Arrays.asList(condiments));
	}

	// getters and setters ....................................................

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Float getCost() {
		return cost;
	}

	public void setCost(Float cost) {
		this.cost = cost;
	}

	public List<Condiment0> getCondiments() {
		return condiments;
	}

	public void setCondiments(List<Condiment0> condiments) {
		this.condiments = condiments;
	}

}
