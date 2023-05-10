package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record Water(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "Water";
    }
    @Override
    public String toString() {
        return measure + " water with lot -> " + lot;
    }
}
