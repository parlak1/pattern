package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Chickpea(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Chickpeas";
    }

    @Override
    public String toString() {
        return measure + " chickpea with lot -> " + lot;
    }
}
