import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})

export class ListRecipesComponent implements OnInit {
  // recipes: any;
  recipes: Array<any> = [];

  constructor(
      private http: HttpService
    ){ }; // injection d'un RecetteService

  ngOnInit():void {
    this.getData();
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
}
