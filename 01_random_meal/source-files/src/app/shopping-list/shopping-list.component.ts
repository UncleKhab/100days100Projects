import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/recipe.models';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingListService.notifyChange.subscribe(
      (list) => (this.shoppingList = list)
    );
  }
}
