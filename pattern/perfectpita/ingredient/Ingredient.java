package pattern.perfectpita.ingredient;

import pattern.perfectpita.measure.Measure;

public interface Ingredient {
    String getName();
    Measure measure();
    String lot();
}
