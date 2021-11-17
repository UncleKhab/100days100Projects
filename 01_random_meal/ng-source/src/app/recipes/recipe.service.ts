import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { SideDrawerService } from '../side-drawer/side-drawer.service';
import { Recipe } from './recipe.models';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(
    private http: HttpClient,
    private sideDrawerSevice: SideDrawerService
  ) {}
  private loadedFromCache = false;
  currentRecipe: Recipe | undefined;
  cachedRecipes: Recipe[] = [];
  notifyChange = new Subject<{ recipe: Recipe; cached: Recipe[] }>();

  getAndStoreRecipe() {
    this.http
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .pipe(
        map((data: any) => {
          const rawRecipe = data.meals[0];

          const recipe: Recipe = {
            id: rawRecipe.idMeal,
            title: rawRecipe.strMeal,
            ingredients: [],
            instructions: rawRecipe.strInstructions,
            imageUrl: rawRecipe.strMealThumb,
            videoUrl: rawRecipe.strYoutube,
            source: rawRecipe.strSource,
          };

          for (let i = 1; i <= 20; i++) {
            const ingredient = rawRecipe[`strIngredient${i}`];
            const qty = rawRecipe[`strMeasure${i}`];
            if (ingredient) {
              recipe.ingredients.push({ title: ingredient, qty: qty });
            } else {
              break;
            }
          }
          return recipe;
        })
      )
      .subscribe((recipe) => {
        if (
          this.cachedRecipes.findIndex(
            (item: Recipe) => item.id === recipe.id
          ) > -1
        ) {
          return;
        }
        if (this.currentRecipe && !this.loadedFromCache) {
          this.cachedRecipes.push(this.currentRecipe);
        }

        this.currentRecipe = recipe;

        this.notifyChange.next({
          recipe: { ...this.currentRecipe },
          cached: [...this.cachedRecipes],
        });
      });
  }

  loadCachedRecipe(index: number): void {
    this.currentRecipe = this.cachedRecipes[index];
    this.notifyChange.next({
      recipe: { ...this.currentRecipe },
      cached: [...this.cachedRecipes],
    });
  }
}
