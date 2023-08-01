import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})

export class ListRecipesComponent implements OnInit {
  // recipes: any;
  recipes: Array<any> = [];
  id_recette: any ='0';
  ingredients :any = [];

  constructor(
      private http: HttpService,
      private route: ActivatedRoute,
      // private ingredientComponent: IngredientFormComponent
    ){ }; // injection d'un RecetteService

  ngOnInit():void {
    this.id_recette = this.route.snapshot.paramMap.get('id');
    console.log(this.id_recette);
    if (this.id_recette != null ){
      this.voirRecette(this.id_recette);
    } else{
      this.getData();
    }   
    // this.recipes = this.rs.readRecipes();
  }

  getData(){
    this.http.getData("recette")
    .subscribe({
      // next: (data)=>console.log(data),
      next: (data)=>this.recipes = data,
      error: (err:Error)=> console.log(err),
      complete:()=>console.log("success")
    });
  }

  delete(id:any){
    this.http.deleteData("recette", id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getData()
    });
  }
  addFavoris(id:any){

  }
  voirRecette(id:any){
    this.http.getIngredientByIdRecipe("ingredient", this.id_recette)
    .subscribe({
      next: (data:string)=> this.ingredients = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log('Observer got a complete notification')
    });
  }
}
