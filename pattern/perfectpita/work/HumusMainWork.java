package pattern.perfectpita.work;

import lombok.Getter;
import pattern.perfectpita.ingredient.Ingredient;
import pattern.perfectpita.util.Constant;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class HumusMainWork implements Work {
    @Getter
    private final List<Ingredient> ingredients;
    @Getter
    private final List<Work> works;

    public HumusMainWork() {
        ingredients = new ArrayList<>();
        works = new ArrayList<>();
    }

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

//    public int getMeasure() {
//        return ingredients.stream().map(Ingredient::measure).mapToInt(Measure::amount).sum();
//    }

    @Override
    public String getLot() {
        return Constant.DATE_FORMAT.format(Instant.now()) + '_' +this.getClass().getSimpleName();
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
        System.out.println(this.getClass().getSimpleName() + " prepare method is invoked.");
    }

    @Override
    public String listIngredients() {
        return this.works.stream().map(Work::getIngredients).toList().toString();
    }
}
