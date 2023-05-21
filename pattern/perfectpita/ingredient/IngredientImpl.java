package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record IngredientImpl(String name, Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return name;
    }

    @Override
    public Measure getAmount() {
        return measure;
    }

    @Override
    public String toString() {
        return measure + " " + name + " with lot -> " + lot;
    }
}
