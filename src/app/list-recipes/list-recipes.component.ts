import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../model/recette';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})

export class ListRecipesComponent implements OnInit {

  table: string = "recette";
  recipes: Array<Recette> = [];
  ingredients :any = [];
  recette: Recette = new Recette();

  constructor(
      private http: HttpService,
      private route: ActivatedRoute,
      // private ingredientComponent: IngredientFormComponent
    ){ }; // injection d'un RecetteService

  ngOnInit():void {
    this.recette.id = this.route.snapshot.paramMap.get('id');
    
    if (this.recette.id != null ){
      this.voirRecette(this.recette.id);
    } else{
      this.getData();
    }   
    // this.recipes = this.rs.readRecipes();
  }

  getData(){
    this.http.getData(this.table)
    .subscribe({
      next: (data: Recette[])=>this.recipes = data,
      error: (err:Error)=> console.log(err),
      complete:()=>console.log(this.recipes)
    });
  }

  delete(id:any){
    this.http.deleteData(this.table, id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getData()
    });
  }

  voirRecette(id:any){
    this.http.getIngredientByIdRecipe("ingredient", this.recette.id)
    .subscribe({
      next: (data:string)=> this.ingredients = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log('Observer got a complete notification')
    });
  }

  addFavoris(id:any){

  }
}
