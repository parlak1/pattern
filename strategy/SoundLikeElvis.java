package pattern.strategy;

public class SoundLikeElvis implements QuackeBehavior {

	@Override
	public void makeSound() {
		System.out.println("It is now or never; my love wont wait");
	}

}
