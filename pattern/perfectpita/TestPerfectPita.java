package pattern.perfectpita;

import pattern.perfectpita.ingredient.Ingredient;
import pattern.perfectpita.ingredient.IngredientImpl;
import pattern.perfectpita.measure.Measure;
import pattern.perfectpita.measure.Unit;
import pattern.perfectpita.work.Work;
import pattern.perfectpita.work.WorkImpl;

public class TestPerfectPita {
    public static void main(String[] args) {
        // setup: measures
        Measure ounce5 = new Measure(5, Unit.OUNCE);
        Measure pound10 = new Measure(10, Unit.POUND);
        Measure gallon10 = new Measure(10, Unit.GALLON);

        // setup: edible ingredients
        Ingredient chickpea = new IngredientImpl("Chickpea", pound10, "123-456-7890-chickpea");
        Ingredient water = new IngredientImpl("Water", gallon10, null);
        Ingredient salt = new IngredientImpl("Salt", ounce5, "123-456-7890-salt");
        Ingredient redPepper = new IngredientImpl("RedPepper", ounce5, "123-456-7890-redPepper");
        Ingredient tahini = new IngredientImpl("Tahini", ounce5, "123-456-7890-tahini");
        Ingredient roastedGarlic = new IngredientImpl("RoastedGarlic", ounce5, "123-456-7890-roastedGarlic");

        // setup: packaging ingredients
        Ingredient cup = new IngredientImpl("Cup", ounce5, "123-456-7890-cup");
        Ingredient lid = new IngredientImpl("Lid", ounce5, "123-456-7890-lid");
        Ingredient box = new IngredientImpl("Box", ounce5, "123-456-7890-box");

        // setup: humus main work
        Work humusMainWork = new WorkImpl("humusMainWork");
        humusMainWork.addIngredient(chickpea);
        humusMainWork.addIngredient(water);
        humusMainWork.prepare();

        // setup humus condiment work
        Work humusCondimentWork = new WorkImpl("humusCondimentWork");
        humusCondimentWork.addIngredient(salt);
        humusCondimentWork.addIngredient(redPepper);
        humusCondimentWork.prepare();

        // setup: humus packaging work
        Work humusPackagingWork = new WorkImpl("humusPackagingWork");
        humusPackagingWork.addIngredient(cup);
        humusPackagingWork.addIngredient(lid);
        humusPackagingWork.addIngredient(box);

        // setup: humus main final work
        Work humusMainFinalWork = new WorkImpl("humusMainFinalWork");
        humusMainFinalWork.addWork(humusMainWork);
        humusMainFinalWork.addWork(humusCondimentWork);
        humusMainFinalWork.addIngredient(tahini);
        humusMainFinalWork.addIngredient(roastedGarlic);
        humusMainFinalWork.prepare();

        // setup humus final product
        Work humusFinalProduct = new WorkImpl("humusFinalProduct");
        humusFinalProduct.addWork(humusMainFinalWork);
        humusFinalProduct.addWork(humusPackagingWork);

        humusFinalProduct.prepare();

        System.out.println("Wanna see the ingredients? Here they are: " + humusFinalProduct.listIngredients());
    }

}
