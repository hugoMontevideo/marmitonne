import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../services/api/http.service';
import { Recette } from '../model/recette';
import { Ingredient } from '../model/ingredient';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent implements OnInit {
  
  table: string = "recette";
  ingredients: Array<Ingredient> = [];
  recette: Recette = new Recette;
  categories!: Array<any>; // propriété de categories
  test :any;
  // id: string | null = '0'; // si id = 0 on est en ajout
  id:any;

  constructor(
              private http:HttpService,
              private router: Router,
              private route : ActivatedRoute
            ){  }

  ngOnInit(){
    this.http.getData("categorie")
      .subscribe({
        next: (data)=>this.categories = data, // echo nous envoie les data
        error: (err:Error)=> console.log(err),
        complete:()=>console.log("success")
      });

    this.id= this.route.snapshot.paramMap.get('id');
 
    if(this.id != null){
      this.http.getData( this.table, this.id )
      .subscribe({
        next: (data:Recette)=>this.recette = data,
        error: (err:Error)=> console.log(err),
        complete:()=> console.log("success")
      })
    }
  }

  formulaire( form: NgForm ){
    this.http.postData('recette', form.value )
    .subscribe({
      next: (data)=>console.log(data),
      error: (err:Error)=> console.log(err),
      complete:()=> console.log("success")
    } );
    this.router.navigate(['listRecipe']);
  }

  addIngr(event:Ingredient){
    this.ingredients.push({
      id:0,
      quantite: event.quantite,
      nom: event.nom,
      unite: event.unite
    })
  }

  onDeleteItem(i:any){
    this.ingredients.splice(parseInt(i),1);
  }

  
}
