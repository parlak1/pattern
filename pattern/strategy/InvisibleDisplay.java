package pattern.strategy;

public class InvisibleDisplay implements DisplayBehavior {

	@Override
	public void display() {
		System.out.println("I am hollow; you cannot see me with your worldly eyes");
	}

}
