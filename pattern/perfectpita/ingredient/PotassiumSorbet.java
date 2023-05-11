package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public record PotassiumSorbet(Measure measure, String lot) implements Ingredient {
    @Override
    public String getName() {
        return "PotassiumSorbet";
    }

    @Override
    public String toString() {
        return measure + " potassium sorbet with lot -> " + lot;
    }
}
