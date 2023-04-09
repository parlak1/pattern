package pattern.perfectpita;

public class Measure {
    private String unit;
    private int amount;
    private int weight;
    public Measure (int amount, String unit) {
        this.unit = unit;
        this.amount = amount;
    }
    public int getAmount() {
        return amount;
    }
    public String getUnit() {
        return unit;
    }
    public int getWeight() {
        return weight;
    }
}
