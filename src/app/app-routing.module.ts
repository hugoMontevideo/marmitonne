import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { EtapeFormComponent } from './etape-form/etape-form.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';

const routes: Routes = [
  { path : "", component: HomeComponent },
  { path: "formRecipe", component: RecipeFormComponent },
  // { path: "formRecipe/:id/:test", component: RecipeFormComponent },
  { path: "formRecipe/:id", component: RecipeFormComponent },
  { path: "listRecipe", component: ListRecipesComponent },

  { path: "listCategory", component: CategoryComponent},
  { path: "formCategory", component: CategoryFormComponent},
  { path: "formCategory/:id", component: CategoryFormComponent },
  { path: "listIngredient", component: IngredientComponent},
  { path: "formIngredient", component: IngredientFormComponent},
  // { path: "formIngredient/:id", component: IngredientFormComponent}, // modification d'un ingredient
  { path: "formIngredient/:id", component: IngredientFormComponent}, // id_recette
  { path: "formEtape/:id", component: EtapeFormComponent},// id_recette
  { path: "oneRecipe/:id", component: OneRecipeComponent},// id

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { 
  

}
