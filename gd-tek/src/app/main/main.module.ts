import {NgModule} from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {RecipeService} from "../recipe/recipe.service";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  providers: [RecipeService],
})
export class MainModule {
}
