import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent {
  
  objet = {
    nom:'',
    quantite: '',
    unite: ''
  }

  @Output() ingrEvent = new EventEmitter(); 

  addIngredient(unite:string, quantite:string, nom:string){
    
    this.objet.nom = nom;
    this.objet.unite = unite;
    this.objet.quantite = quantite;

    this.ingrEvent.emit(this.objet);
    
  }


}



  // ingredients:any;
  // table: string = "ingredient";

  // constructor( 
  //   private http: HttpService
  // ){ };// injection d'un HttpService

  // ngOnInit(): void{
 
  //   this.getData();
  // }

  // getData(){
  //   this.http.getData(this.table).subscribe({
  //     next: (data:string)=> this.ingredients = (data),
  //     error: (err: Error )=>console.error('Observer got an error: '+ err ),
  //     complete: ()=>console.log('Observer got a complete notification')
  //   });
  // }

  // delete(id:any){
  //   // console.log(id);
  //   this.http.deleteData(this.table , id)
  //   .subscribe({
  //     error: (err: Error )=>console.error('Observer got an error: '+ err ),
  //     complete: ()=> this.getData()
  //   });
  // }