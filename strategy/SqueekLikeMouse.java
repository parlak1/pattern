package pattern.strategy;

public class SqueekLikeMouse implements QuackeBehavior {

	@Override
	public void makeSound() {
		System.out.println("I squeek like mouse boy");
	}

}
