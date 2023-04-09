package pattern.perfectpita;

public class Cup implements Ingredient{
    private Measure measure;
    private String lot;

    public Cup(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "Cup";
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
