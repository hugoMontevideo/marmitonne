import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.scss']
})
export class OneRecipeComponent implements OnInit {

  // recette = {  // objet vide
  //               id: 0,
  //               titre : '',
  //               cout : '',
  //               tempsprep: '',
  //               tempscuisson: '',
  //               difficulte: '',
  //               photo : '',
  //               id_categorie : ''
  //             }
  id:any;
  recette:any;
  ingredients: any = [{
                        id: 1,
                        nom: 'oeufs',
                        quantite: 2,
                        unite: ''
                    },
                    {
                      id: 2,
                      nom: 'farine',
                      quantite: 200,
                      unite: 'gr'
                    },
                    {
                      id: 3,
                      nom: 'huile',
                      quantite: 200,
                      unite: 'gr'
                    },

                    ]

  table: string = 'recette';

  nbPersonne: any = 1;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.http.getData('recette', this.id)
    .subscribe({
      next: (data:string)=> this.recette = data,
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log(this.recette)
    });
    
    ;

  }

  // getOneRecipe(){
  //   this.http.getRecipeById(this.table, this.id)
  //   .subscribe({
  //     next: (data:string)=> console.log(data),
  //     error: (err: Error )=>console.error('Observer got an error: '+ err ),
  //     complete: ()=>console.log('Observer got a complete notification')
  //   });
  // }

}
