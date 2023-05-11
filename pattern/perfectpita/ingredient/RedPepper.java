package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record RedPepper(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Red Pepper";
    }

    @Override
    public String toString() {
        return measure + " red pepper with lot -> " + lot;
    }
}
