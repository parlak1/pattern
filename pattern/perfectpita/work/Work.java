package pattern.perfectpita.work;

import pattern.perfectpita.ingredient.Ingredient;

import java.util.List;

public interface Work {
    String getName();

    String getLot();

    void addIngredient(Ingredient ingredient);

    void addWork(Work work);

    List<Ingredient> getIngredients();

    List<Work> getWorks();

    void prepare();

    String listIngredients();
}
