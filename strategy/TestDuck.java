package pattern.strategy;

public class TestDuck {

	public static void main(final String[] args) {

		//		final Duck rusky = new RussianDuck();
		//		rusky.setDisplayBehavior(new InvisibleDisplay());
		//		rusky.setFlyBehaviour(new StelthMode());
		//		rusky.setQuackeBehavior(new QuackQuack());
		//		rusky.setSwimBehavior(new SwimWithWings());

		//		rusky.display();
		//		rusky.fly();
		//		rusky.makeSound();
		//		rusky.swim();

		//		final Duck turko = new TurksihDuck();
		//		turko.setDisplayBehavior(new RegularDisplay());
		//		turko.setFlyBehaviour(new FlyNoWay());
		//		turko.setQuackeBehavior(new SqueekLikeMouse());
		//		turko.setSwimBehavior(new SwimWithLegs());

		//		turko.display();
		//		turko.fly();
		//		turko.makeSound();
		//		turko.swim();

		final Duck algerianDuck = new AlgerianDuck();
		algerianDuck.setDisplayBehavior(new DisplayLikeElvis());
		algerianDuck.setQuackeBehavior(new SoundLikeElvis());
		algerianDuck.setFlyBehaviour(new FlyLikeSuperman());
		algerianDuck.setSwimBehavior(new SwimWithTwoHands());

		algerianDuck.fly();
		algerianDuck.swim();
		algerianDuck.makeSound();
		algerianDuck.display();
	}

}
