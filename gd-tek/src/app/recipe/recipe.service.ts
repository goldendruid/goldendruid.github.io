import {Injectable, Signal, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './recipe';
import {catchError, map, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private dataSignal = signal<Recipe[]>([]);
  private errorSignal = signal<string[]>([]);

  private jsonUrl = 'assets/recipes.json';

  constructor(private http: HttpClient) {
    this.fetch();
  }
  getRecipes(): Signal<Recipe[]>{
    return this.dataSignal.asReadonly()
  }
  getRecipe(name: string): Recipe | undefined {
    return this.dataSignal.asReadonly()().find(recipe => recipe.name === name);
  }
  fetch(): void {
    this.http.get<{ recipes: Recipe[] }>(this.jsonUrl).pipe(
      map(response => (response.recipes as Recipe[]))
    ).pipe(
      tap((response) => {
        this.dataSignal.set(response);
        console.log('Service initialized with data:', response);
      }),
      catchError((error) => {
        this.errorSignal.set([error]);
        console.error('Service failed to initialize:', error);
        return throwError(error);
      })
    ).subscribe();
  }
}
