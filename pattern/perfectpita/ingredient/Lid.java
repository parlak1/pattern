package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Lid(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Lid";
    }
    @Override
    public String toString() {
        return measure + " lid with lot -> " + lot;
    }
}
