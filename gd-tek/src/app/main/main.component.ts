import {Component} from '@angular/core';
import {RecipeService} from "../recipe/recipe.service";
import {CalculatorService} from "../calculator/calculator.service";
import {Recipe} from "../recipe/recipe";
import {Ingredient, Solution} from "../calculator/Ingredient";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  recipe: Solution = Solution.empty();
  constructor(private recipeService: RecipeService, private calculatorService: CalculatorService) {
  }
  public fromWeight(ws: string){
    const weight = parseInt(ws);
    const recipe = this.recipeService.getRecipe("gd-tek-millet");
    if(!!recipe){
      this.recipe = this.calculatorService.forWeight(weight).prepareRecipe(recipe)
    }
  }
  public fromSize(xs: string, ys:string){
    const x = parseInt(xs);
    const y = parseInt(ys);
    const recipe = this.recipeService.getRecipe("gd-tek-millet");
    if(!!recipe){
      this.recipe = this.calculatorService.forSize(x,y).prepareRecipe(recipe);
    }
  }
}
