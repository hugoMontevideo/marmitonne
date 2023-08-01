import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ButtonDetailComponent } from './button-detail/button-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { EtapeFormComponent } from './etape-form/etape-form.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';
import { QuantityPipe } from './quantity.pipe';
import { EuroPipe } from './euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ButtonDetailComponent,
    RecipeFormComponent,
    ListRecipesComponent,
    CategoryComponent,
    CategoryFormComponent,
    IngredientComponent,
    IngredientFormComponent,
    EtapeFormComponent,
    OneRecipeComponent,
    QuantityPipe,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
