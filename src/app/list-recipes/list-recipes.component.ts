import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})

export class ListRecipesComponent {
  // recipes: any;
  recipes: Array<any> = [];

  constructor(private rs: RecetteService){ }; // injection d'un RecetteService

  ngOnInit(){
    this.recipes = this.rs.readRecipes();
  }


  delete(id:any){
    this.rs.deleteRecipe(id);

    this.ngOnInit();
  }

}
