package pattern.perfectpita;

import java.util.ArrayList;
import java.util.List;

public class HumusPackagingWork implements Work {
    List<Ingredient> ingredients = new ArrayList<>();

    @Override
    public String getName() {
        return "Humus packaging work in progress";
    }

    @Override
    public int getMeasure() {
        return ingredients.stream().map(x -> x.getMeasure()).mapToInt(o -> o.getWeight()).sum();
    }

    @Override
    public String getLot() {
        return "hello this is a lot number, change me!!";
    }

    @Override
    public void addIngredient(Ingredient ingredient) {
        ingredients.add(ingredient);
    }

    @Override
    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    @Override
    public void addWork(Work work) {
        // todo: do nothing
    }

    @Override
    public void prepare() {
        // TODO Auto-generated method stub
    }
}
