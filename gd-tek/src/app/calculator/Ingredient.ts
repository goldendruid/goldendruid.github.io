import {Ratio} from "../recipe/recipe";

export class Ingredient {
  constructor(readonly type: string, readonly weight: number) {
  }
}
export class Solution {
  readonly totalWeight: number;
  readonly ingredients: Ingredient[];

  constructor(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.totalWeight = ingredients.reduce((a,v) => a + v.weight,  0);
  }
  static empty(){
    return new Solution([]);
  }
}
