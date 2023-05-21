package pattern.perfectpita.measure;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum Unit {
    /* base units */
    GRAM("g", Kind.METRIC, 1, null),
    MILLILITRE("ml", Kind.METRIC, 1, null),

    /* derived units */
    KILOGRAM("kg", Kind.METRIC, 1000, GRAM),
    LITRE("l", Kind.METRIC, 1000, MILLILITRE),

    /* imperial units */
    POUND("lb", Kind.IMPERIAL, 453.592, GRAM),
    GALLON("gal", Kind.IMPERIAL, 3785.41, MILLILITRE),
    OUNCE("oz", Kind.IMPERIAL, 29.5735, GRAM);

    @Getter
    private final String label;
    @Getter
    private final Kind kind;
    @Getter
    private final double value;
    @Getter
    private final Unit metricUnit;

    enum Kind {
        IMPERIAL,
        METRIC
    }
}
