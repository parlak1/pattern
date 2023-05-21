package pattern.perfectpita.work;

import lombok.Getter;
import pattern.perfectpita.ingredient.Ingredient;
import pattern.perfectpita.util.Constant;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class WorkImpl implements Work {
    @Getter
    private final String name;
    @Getter
    private final List<Ingredient> ingredients;
    @Getter
    private final List<Work> works;

    public WorkImpl(String name) {
        this.name = name;
        this.ingredients = new ArrayList<>();
        this.works = new ArrayList<>();
    }

    @Override
    public String getLot() {
        return Constant.DATE_FORMAT.format(Instant.now()) + '_' + this.getClass().getSimpleName();
    }

    @Override
    public void addIngredient(Ingredient ingredient) {
        ingredients.add(ingredient);
    }

    @Override
    public void addWork(Work work) {
        works.add(work);
    }

    @Override
    public void prepare() {
        System.out.println("Yay! I'm preparing the " + name);
    }

    @Override
    public String listIngredients() {
        return this.works.stream().map(Work::getIngredients).toList().toString();
    }

//    public int getMeasure() {
//        return ingredients.stream().map(Ingredient::measure).mapToInt(Measure::amount).sum();
//    }
}
