package pattern.perfectpita;

public class Chickpeas implements Ingredient {
    private Measure measure;
    private String lot;

    public Chickpeas(Measure measure, String lot){
        this.measure = measure;
        this.lot = lot;
    }

    @Override
    public String getName() {
        return "Chickpeas";
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
