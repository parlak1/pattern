package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Cup(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Cup";
    }

    @Override
    public String toString() {
        return measure + " cup with lot -> " + lot;
    }
}
