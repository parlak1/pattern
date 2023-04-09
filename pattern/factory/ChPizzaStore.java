package pattern.factory;

public class ChPizzaStore implements PizzaStore {

    @Override
    public Pizza createPizza(String type) {
        switch (type) {
            case "cheese":
                return new ChCheesePizza();
            case "pepperoni":
                return new ChPepperoniPizza();
            default:
                return null;
        }
    }

}
