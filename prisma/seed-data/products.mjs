import { getDrinksData } from "./drinks.mjs";
import { getTeaAndNonCoffeeData } from "./tea-noncoffee.mjs";
import { getFoodsData } from "./foods.mjs";
import { getSnacksAndCombosData } from "./snacks.mjs";

export function getAllProducts(cat) {
  return [
    ...getDrinksData(cat),
    ...getTeaAndNonCoffeeData(cat),
    ...getFoodsData(cat),
    ...getSnacksAndCombosData(cat),
  ];
}
