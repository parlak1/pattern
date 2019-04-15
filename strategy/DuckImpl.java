package pattern.strategy;

public class DuckImpl implements Duck {

	private SwimBehavior swimBehavior;

	private QuackeBehavior quackeBehavior;

	private FlyBehaviour flyBehaviour;

	private DisplayBehavior displayBehavior;

	public DuckImpl() {
	}

	// behaviors ..............................................................

	@Override
	public void swim() {
		this.swimBehavior.swim();
	}

	@Override
	public void makeSound() {
		this.quackeBehavior.makeSound();
	}

	@Override
	public void fly() {
		this.flyBehaviour.fly();
	}

	@Override
	public void display() {
		this.displayBehavior.display();
	}

	// getters and setters ....................................................

	@Override
	public SwimBehavior getSwimBehavior() {
		return this.swimBehavior;
	}

	@Override
	public void setSwimBehavior(final SwimBehavior swimBehavior) {
		this.swimBehavior = swimBehavior;
	}

	@Override
	public QuackeBehavior getQuackeBehavior() {
		return this.quackeBehavior;
	}

	@Override
	public void setQuackeBehavior(final QuackeBehavior quackeBehavior) {
		this.quackeBehavior = quackeBehavior;
	}

	@Override
	public FlyBehaviour getFlyBehaviour() {
		return this.flyBehaviour;
	}

	@Override
	public void setFlyBehaviour(final FlyBehaviour flyBehaviour) {
		this.flyBehaviour = flyBehaviour;
	}

	@Override
	public DisplayBehavior getDisplayBehavior() {
		return this.displayBehavior;
	}

	@Override
	public void setDisplayBehavior(final DisplayBehavior displayBehavior) {
		this.displayBehavior = displayBehavior;
	}

}
