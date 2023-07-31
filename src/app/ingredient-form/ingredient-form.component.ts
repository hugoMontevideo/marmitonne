import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/api/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})

export class IngredientFormComponent implements OnInit{

  table: string = "ingredient";
  ingredients:any;

  id_recette: string | null = '0';
  ingredient = {  // objet vide
                id: 0,
                titre : '',
                quantite : 0,
                unite: '',
                id_recette: 0
              }

  constructor( 
              // private router: Router,
              private route: ActivatedRoute,
              private http: HttpService
            ){}

  ngOnInit(){
    // if( this.ingredients == undefined){
    //   // this.etapes = [];
    //   this.ingredients=[{recette: 'Ma recette'}] ;
    // }

      this.id_recette = this.route.snapshot.paramMap.get('id');

      if(this.id_recette != null){ 
        this.ingredient.id_recette = parseInt(this.id_recette);
      }
      this.getIngredientOnRecipe();
  }

  formulaire2( form: NgForm , id:any ){

    this.http.postData( this.table , form.value )
        .subscribe({
            next: (data:string )=>console.log(data),
            error: (err: Error )=>console.error('Observer got an error: '+ err ),
            // complete: ()=>console.log('Observer got a complete notification')
            complete: () => this.getIngredientOnRecipe()
           });
    // form.reset();
    // this.router.navigate(['formIngredient', this.id_recette]); // equivalent à header: location
  }

  getIngredientOnRecipe(){
    this.http.getIngredientByIdRecipe(this.table, this.id_recette)
    .subscribe({
      next: (data:string)=> this.ingredients = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log('Observer got a complete notification')
    });
  }

  delete(id:any){
    this.http.deleteData(this.table , id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getIngredientOnRecipe()
    });
  }

}
