package pattern.strategy;

public class SwimWithTwoHands implements SwimBehavior {

	@Override
	public void swim() {
		System.out.println("I swim like michael phelps");
	}

}
