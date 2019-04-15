package pattern.strategy;

public class SwimWithLegs implements SwimBehavior {

	@Override
	public void swim() {
		System.out.println("I swim using my legs like duck do");
	}

}
