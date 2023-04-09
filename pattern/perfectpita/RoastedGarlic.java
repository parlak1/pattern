package pattern.perfectpita;

public class RoastedGarlic implements Ingredient {
    private Measure measure;
    private String lot;

    public RoastedGarlic(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "RoastedGarlic";
    }

    @Override
    public Measure getMeasure() {
        return measure;
    }

    @Override
    public String getLot() {
        return lot;
    }
}
