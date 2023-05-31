package pattern.perfectpita.work;

import lombok.Getter;
import pattern.perfectpita.ingredient.Ingredient;
import pattern.perfectpita.util.Constant;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class WorkImpl implements Work {
    @Getter
    private final String name;
    @Getter
    private final List<Ingredient> ingredients;
    @Getter
    private final List<Work> works;
    @Getter
    private String lot;

    public WorkImpl(String name) {
        this.name = name;
        this.ingredients = new ArrayList<>();
        this.works = new ArrayList<>();
    }

    @Override
    public void assignLot() {
        lot = Constant.DATE_FORMAT.format(new Date()) + '_' + this.getClass().getSimpleName();
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
        assignLot();
    }

    @Override
    public String listIngredients() {
        // TODO "print all ingredients with their respective lots"
        return this.works.stream().map(Work::getIngredients).toList().toString();
    }

//    public int getMeasure() {
//        return ingredients.stream().map(Ingredient::measure).mapToInt(Measure::amount).sum();
//    }
}
