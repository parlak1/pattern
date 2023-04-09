package pattern.strategy;

public class QuackQuack implements QuackeBehavior {

	@Override
	public void makeSound() {
		System.out.println("i am makeing a quack quack sound");
	}

}
