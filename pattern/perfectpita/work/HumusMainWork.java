package pattern.perfectpita.work;

import lombok.Getter;
import pattern.perfectpita.ingredient.Ingredient;
import pattern.perfectpita.measure.Measure;

import java.util.ArrayList;
import java.util.List;

public class HumusMainWork implements Work {
    @Getter
    private final List<Ingredient> ingredients = new ArrayList<>();
    @Getter
    private final List<Work> works = new ArrayList<>();

    @Override
    public String getName() {
        return "Humus main batch work in progress";
    }

    @Override
    public int getMeasure() {
        return ingredients.stream().map(Ingredient::measure).mapToInt(Measure::amount).sum();
    }

    @Override
    public String getLot() {
        return "hello this is Humus main batch work in progress lot number, change me!!";
    }

    @Override
    public void addIngredient(Ingredient ingredient) {
        ingredients.add(ingredient);
    }

    @Override
    public void addWork(Work work) {
        this.works.add(work);
    }

    @Override
    public void prepare() {
        // TODO Auto-generated method stub
    }
    @Override
    public String listIngredients() {
        return null;
    }
}
