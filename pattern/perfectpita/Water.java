package pattern.perfectpita;

public class Water implements Ingredient{
    private Measure measure;
    private String lot;

    public Water(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "Water";
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
