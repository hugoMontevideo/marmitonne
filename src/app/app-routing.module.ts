import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path : "", component: HomeComponent },
  { path: "formRecipe", component: RecipeFormComponent },
  // { path: "formRecipe/:id/:test", component: RecipeFormComponent },
  { path: "formRecipe/:id", component: RecipeFormComponent },
  { path: "listRecipe", component: ListRecipesComponent },
  { path: "listCategory", component: CategoryComponent},
  { path: "formCategory", component: CategoryFormComponent},
  { path: "formCategory/:id", component: CategoryFormComponent }

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
