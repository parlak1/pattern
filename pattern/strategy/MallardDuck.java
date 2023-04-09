package pattern.strategy;

public class MallardDuck extends DuckImpl {

	public MallardDuck() {
		this.setFlyBehaviour(new FlyWithWings());
		this.setQuackeBehavior(new QuackQuack());
		this.setSwimBehavior(new SwimWithLegs());
		this.setDisplayBehavior(new RegularDisplay());
	}

}
