package pattern.perfectpita;

import java.util.List;

public interface Work {
    String getName();
    int getMeasure();
    String getLot();
    void addIngredient(Ingredient ingredient);
    void addWork(Work work);
    List<Ingredient> getIngredients();
    void prepare();
}
