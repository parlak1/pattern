package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Salt(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Salt";
    }

    @Override
    public String toString() {
        return measure + " salt with lot -> " + lot;
    }
}
