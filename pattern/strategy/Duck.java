package pattern.strategy;

public interface Duck {

	// behaviors ..............................................................

	public void swim();

	public void makeSound();

	public void fly();

	public void display();

	// setters and getters ....................................................

	public FlyBehaviour getFlyBehaviour();

	public void setFlyBehaviour(final FlyBehaviour flyBehaviour);

	public QuackeBehavior getQuackeBehavior();

	public void setQuackeBehavior(final QuackeBehavior quackeBehavior);

	public SwimBehavior getSwimBehavior();

	public void setSwimBehavior(final SwimBehavior quackeBehavior);

	public DisplayBehavior getDisplayBehavior();

	public void setDisplayBehavior(final DisplayBehavior quackeBehavior);

}
