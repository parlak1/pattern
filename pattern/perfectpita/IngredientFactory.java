package pattern.perfectpita;

public interface IngredientFactory {
    void addIngredient(Ingredient ingredient);

    Chickpeas addChickpea();
    Water addWater();
    Oil addOil();
    Salt addSalt();
    RedPepper addRedPepper();
    Tahini addTahini();
    PotasiumSorbate addPotasiumSorbate();
    RoastedGarlic addRoastedGarlic();
}
