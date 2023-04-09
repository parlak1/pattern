package pattern.perfectpita;

public class Tahini implements Ingredient{
    private Measure measure;
    private String lot;

    public Tahini(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "Tahini";
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
