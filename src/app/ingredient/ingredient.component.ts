import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit{

  ingredients:any;
  table: string = "ingredient";

  constructor( 
    private http: HttpService
  ){ };// injection d'un HttpService

  ngOnInit(): void{
 
    this.getData();
  }

  getData(){
    this.http.getData(this.table).subscribe({
      next: (data:string)=> this.ingredients = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log('Observer got a complete notification')
    });
  }

  delete(id:any){
    // console.log(id);
    this.http.deleteData(this.table , id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getData()
    });
  }

}
