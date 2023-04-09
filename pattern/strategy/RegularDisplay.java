package pattern.strategy;

public class RegularDisplay implements DisplayBehavior {

	@Override
	public void display() {
		System.out.println("I display like majority of the objects in the world");
	}
}
