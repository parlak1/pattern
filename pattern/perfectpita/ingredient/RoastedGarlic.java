package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record RoastedGarlic(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "RoastedGarlic";
    }

    @Override
    public String toString() {
        return measure + " roasted garlic with lot -> " + lot;
    }
}
