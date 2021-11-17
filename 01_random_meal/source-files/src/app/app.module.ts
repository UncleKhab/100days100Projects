// FUNCTIONALITY MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

//CUSTOM MODULES
import { AppRoutingModule } from './app-routing.module';
//MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

// COMPONENTS
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipe.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    SideDrawerComponent,
    ShoppingListComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
