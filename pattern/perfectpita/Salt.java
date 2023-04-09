package pattern.perfectpita;

public class Salt implements Ingredient{
    private Measure measure;
    private String lot;

    public Salt(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "Salt";
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
