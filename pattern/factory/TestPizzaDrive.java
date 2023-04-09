package pattern.factory;

public class TestPizzaDrive {
    public static void main(String[] args) {
        PizzaStore nyStore = new NyPizzaStore();
        PizzaStore chStore = new ChPizzaStore();

        Pizza pizza = nyStore.createPizza("cheese");
        System.out.println("Ahmet ordered a " + pizza.getName() + "\n");

        pizza = chStore.createPizza("pepperoni");
        System.out.println("Cansu ordered a " + pizza.getName() + "\n");
    }
}
