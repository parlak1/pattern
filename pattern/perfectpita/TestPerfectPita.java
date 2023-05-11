package pattern.perfectpita;

import pattern.perfectpita.ingredient.*;
import pattern.perfectpita.measure.Measure;
import pattern.perfectpita.measure.Unit;
import pattern.perfectpita.work.*;

import java.time.Instant;

public class TestPerfectPita {
    public static void main(String[] args) {
        Measure ounce5 = new Measure(5, Unit.OUNCE);
        Measure pound10 = new Measure(10, Unit.POUND);
        Measure gallon10 = new Measure(10, Unit.GALLON);

        Ingredient chickpea = new Chickpea(pound10, "123-456-7890-chickpea");
        Ingredient water = new Water(gallon10, null);

        Ingredient salt = new Salt(ounce5, "123-456-7890-salt");
        Ingredient redPepper = new RedPepper(ounce5, "123-456-7890-redPepper");

        Ingredient cup = new Cup(ounce5, "123-456-7890-cup");
        Ingredient lid = new Lid(ounce5, "123-456-7890-lid");
        Ingredient box = new Box(ounce5, "123-456-7890-box");

        Ingredient tahini = new Tahini(ounce5, "123-456-7890-tahini");
        Ingredient roastedGarlic = new RoastedGarlic(ounce5, "123-456-7890-roastedGarlic");


        Work humusMainWork = new HumusMainWork();
        humusMainWork.addIngredient(chickpea);
        humusMainWork.addIngredient(water);

        Work humusCondimentWork = new HumusCondimentWork();
        humusCondimentWork.addIngredient(salt);
        humusCondimentWork.addIngredient(redPepper);

        Work humusPackagingtWork = new HumusPackagingWork();
        humusPackagingtWork.addIngredient(cup);
        humusPackagingtWork.addIngredient(lid);
        humusPackagingtWork.addIngredient(box);

        Work humusMainFinalWork = new HumusMainFinalWork();
        humusMainFinalWork.addWork(humusMainWork);
        humusMainFinalWork.addWork(humusCondimentWork);
        humusMainFinalWork.addIngredient(chickpea);
        humusMainFinalWork.addIngredient(tahini);
        humusMainFinalWork.addIngredient(roastedGarlic);

        Work humusFinalProduct = new HumusMainFinalWork();
        humusFinalProduct.addWork(humusMainFinalWork);
        humusFinalProduct.addWork(humusPackagingtWork);

        System.out.println("ingredients: " + humusFinalProduct.listIngredients());
    }
}
