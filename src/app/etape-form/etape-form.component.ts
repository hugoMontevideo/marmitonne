import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/api/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-etape-form',
  templateUrl: './etape-form.component.html',
  styleUrls: ['./etape-form.component.scss']
})

export class EtapeFormComponent {
  table: string = "etape";
  etapes =  [{
              id: 0,
              description : '',
              place : 0,
              id_recette: 0,
              recette: 'Ma recette'
            }] ;

  tempOrder:any =[]; // tableau place des etapes by id

  id_recette: string | null = '0';
  etape = {  // objet vide
            id: 0,
            description : '',
            place : 0,
            id_recette: 0
          }

  constructor( 
              private route: ActivatedRoute,
              private http: HttpService
            ){}

  ngOnInit(){
 
    this.id_recette = this.route.snapshot.paramMap.get('id');

    if(this.id_recette != null){ 
      this.etape.id_recette = parseInt(this.id_recette);
    }
    this.getEtapeOnRecipe();
  }

  getEtapeOnRecipe(){
    this.http.getEtapeByIdRecipe(this.table, this.id_recette).subscribe({
      next: (data:any)=> this.etapes = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>this.fillOrder() // remplir tableau tempOrder
      
    });
  }

  formulaire3( form: NgForm , id:any ){
    console.log(form);
    
    this.http.postData( this.table , form.value )
        .subscribe({
            next: (data:string )=>console.log(data),
            error: (err: Error )=>console.error('Observer got an error: '+ err ),
            complete: () => this.getEtapeOnRecipe()
           });
    form.reset();
    // this.router.navigate(['formIngredient', this.id_recette]); // equivalent à header: location
  }

  delete(id:any){
    this.http.deleteData(this.table , id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getEtapeOnRecipe()
    });
  }

  fillOrder(){
    this.etapes.forEach(etape=>this.tempOrder.push(etape.id))
    // console.log(this.tempOrder)
  }

}
