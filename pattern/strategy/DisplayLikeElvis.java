package pattern.strategy;

public class DisplayLikeElvis implements DisplayBehavior {

	@Override
	public void display() {
		System.out.println("I am displaying like Elvis");
	}

}
