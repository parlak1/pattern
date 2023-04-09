package pattern.perfectpita;

public class Box implements Ingredient {
    private Measure measure;
    private String lot;

    public Box(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }
    @Override
    public String getName() {
        return "Box";
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
