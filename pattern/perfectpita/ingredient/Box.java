package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Box(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Box";
    }

    @Override
    public String toString() {
        return measure + " box with lot -> " + lot;
    }
}
