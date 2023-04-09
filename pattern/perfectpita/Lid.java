package pattern.perfectpita;

public class Lid implements Ingredient {
    private Measure measure;
    private String lot;

    public Lid(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "Lid";
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
