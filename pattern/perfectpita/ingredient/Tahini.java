package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Tahini(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Tahini";
    }

    @Override
    public String toString() {
        return measure + " tahini with lot -> " + lot;
    }
}
