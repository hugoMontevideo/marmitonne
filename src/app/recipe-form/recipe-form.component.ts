import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../services/api/http.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recette= {
    id:0,
    titre : '',
    id_categorie: '',
    descriptif: '',
    ingredient1: [],
    difficulte: '',
    tempsprep: '',
    tempscuisson: '',
    cout: '',
    photo: '',
    etapes:[]
  };
  categories!: Array<any>; // propriété de categories
  test :any;
  // id: string | null = '0'; // si id = 0 on est en ajout
  id:any;
  faCoffee = faCoffee;

  constructor(
      private http:HttpService,
      private router: Router
    ){  }

  ngOnInit(){
    // let test2 = this.route.snapshot.paramMap.get('test');
    // this.id = this.route.snapshot.paramMap.get('id');

    this.http.getData("categorie")
      .subscribe({
      next: (data)=>this.categories = data,
      error: (err:Error)=> console.log(err),
      complete:()=>console.log("success")
      
    });

    if(this.id != null){

      this.http.getData("recette", this.id).subscribe({
        next: (data)=>this.recette = data,
        error: (err:Error)=> console.log(err),
        complete:()=> console.log("success")

      })

    }
  }

  

  formulaire( form: NgForm ){
    console.log(form.value);
    
    this.http.postData('recette', form.value )
    .subscribe({
      next: (data)=>console.log('ok'),
      error: (err:Error)=> console.log(err),
      complete:()=> console.log("success")
    } )

    this.router.navigate(['listRecipe']);
  
  }

  
}
