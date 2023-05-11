package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Oil(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Oil";
    }

    @Override
    public String toString() {
        return measure + " oil with lot -> " + lot;
    }
}
