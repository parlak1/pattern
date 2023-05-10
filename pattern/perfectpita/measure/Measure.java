package pattern.perfectpita.measure;

public record Measure(int amount, Unit unit) {
    @Override
    public String toString() {
        return amount + "_" + unit.getLabel();
    }
}
