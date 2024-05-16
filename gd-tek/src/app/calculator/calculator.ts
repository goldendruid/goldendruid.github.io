import {Recipe} from "../recipe/recipe";
import {Ingredient, Solution} from "./Ingredient";

export class Calculator {
  private testSize = 12*8

  constructor(private solutionWeight: number) {
  }

  prepareRecipe(recipe: Recipe): Solution{
    return new Solution(this.getIngredientsFrom(recipe));
  }

  private getIngredientsFrom(recipe: Recipe): Ingredient[] {
    const ingredients: {ratio: number, type:string}[] = [];
    const wholeRatio = recipe.formula.reduce((acc,v) => {
      const[x, y] = v.ratio.split(':').map(i => parseInt(i));
      const ratio = x / y;
      ingredients.push({ratio: ratio, type: v.type});
      return acc + ratio;
    },0)
    return ingredients.map(i => new Ingredient(i.type,this.solutionWeight * (i.ratio / wholeRatio)))
  }
}
