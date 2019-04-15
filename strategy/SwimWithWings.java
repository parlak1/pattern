package pattern.strategy;

public class SwimWithWings implements SwimBehavior {

	@Override
	public void swim() {
		System.out.println("I swim like a penguin");
	}

}
