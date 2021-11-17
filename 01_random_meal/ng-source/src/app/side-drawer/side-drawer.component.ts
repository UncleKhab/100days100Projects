import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipes/recipe.models';
import { RecipeService } from '../recipes/recipe.service';
import { SideDrawerService } from './side-drawer.service';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
})
export class SideDrawerComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private sideDrawerService: SideDrawerService
  ) {}
  cachedRecipes: Recipe[] = [];
  displayDrawer: boolean = this.sideDrawerService.displayDrawer;
  ngOnInit() {
    this.recipeService.notifyChange.subscribe((data) => {
      this.cachedRecipes = data.cached;
    });
    this.sideDrawerService.notifyChange.subscribe(
      (data) => (this.displayDrawer = data)
    );
  }

  onLoadCachedRecipe(index: number) {
    this.recipeService.loadCachedRecipe(index);
  }
}
