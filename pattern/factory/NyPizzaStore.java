package pattern.factory;

public class NyPizzaStore implements PizzaStore {

    @Override
    public Pizza createPizza(String type) {
        switch (type) {
            case "cheese":
                return new NyCheesePizza();
            case "pepperoni":
                return new NyPepperoniPizza();
            default:
                return null;
        }
    }

}
