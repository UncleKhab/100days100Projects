import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.models';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @ViewChild('ingredients') ingredients: any;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}
  title: string = 'Press the button to get a random recipe';
  recipe: Recipe | undefined;
  cached: Recipe[] = [];

  ngOnInit() {
    this.recipe = this.recipeService.currentRecipe;
    this.recipeService.notifyChange.subscribe((data) => {
      this.recipe = data.recipe;
      this.cached = data.cached;
    });
  }
  fetchRecipe() {
    this.recipeService.getAndStoreRecipe();
  }
  onAddToShoppingList() {
    const selectedIngredients = this.ingredients.selectedOptions.selected.map(
      (item: any) => item.value
    );
    this.shoppingListService.addIngredients(selectedIngredients);
  }
}
