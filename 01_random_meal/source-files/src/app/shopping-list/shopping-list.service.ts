import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../recipes/recipe.models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  shoppingList: Ingredient[] = [];
  notifyChange = new Subject<Ingredient[]>();
  constructor() {}

  getShoppingList() {
    return this.shoppingList.slice();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.shoppingList = [...this.shoppingList, ...ingredients];
    this.notifyChange.next(this.shoppingList);
  }
}
