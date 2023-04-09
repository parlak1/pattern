package pattern.perfectpita;

public class TestPerfectPita {
    public static void main(String[] args) {
        Measure ounze5 = new Measure(5, "ounze");
        Measure pound10 = new Measure(10, "lb");
        Measure gallon10 = new Measure(10, "gallon");

        Ingredient chickpeas = new Chickpeas(pound10, "123-456-7890");
        Ingredient water = new Water(gallon10, null);

        Ingredient salt = new Salt(ounze5, "dkdldld-dldldk");
        Ingredient redPepper = new RedPepper(ounze5, "dkdldld-dldldk");

        Ingredient cup = new Cup(ounze5, "dkdldld-dldldk");
        Ingredient lid = new Lid(ounze5, "dkdldld-dldldk");
        Ingredient box = new Box(ounze5, "dkdldld-dldldk");

        Ingredient tahini = new Tahini(ounze5, "dkdldld-dldldk");
        Ingredient roastedGarlic = new RoastedGarlic(ounze5, "dkdldld-dldldk");
        

        Work humusMainWork = new HumusMainWork();
        humusMainWork.addIngredient(chickpeas);
        humusMainWork.addIngredient(water);

        Work humusCondimentWork = new HumusCondimentWork();
        humusCondimentWork.addIngredient(salt);
        humusCondimentWork.addIngredient(redPepper);

        Work humusPackagingtWork = new HumusPackagingWork();
        humusPackagingtWork.addIngredient(cup);
        humusPackagingtWork.addIngredient(lid);
        humusPackagingtWork.addIngredient(box);

        Work humusMainFinalFWork = new HumusMainFinalWork();
        humusMainFinalFWork.addWork(humusMainWork);
        humusMainFinalFWork.addWork(humusCondimentWork);
        humusMainFinalFWork.addIngredient(chickpeas);
        humusMainFinalFWork.addIngredient(tahini);
        humusMainFinalFWork.addIngredient(roastedGarlic);


        Work humusFinalProduct = new HumusMainFinalWork();
        humusFinalProduct.addWork(humusMainFinalFWork);
        humusFinalProduct.addWork(humusPackagingtWork);

        System.out.println("ahmet: " + humusFinalProduct.getIngredients());
    }
}
