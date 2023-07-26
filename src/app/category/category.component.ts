import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any; 

  constructor( 
        private http: HttpService
      ){ };// injection d'un HttpService

  ngOnInit(): void{
 
    this.getData();
  }

  delete(id:any){
    // console.log(id);
    this.http.deleteData('categorie', id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getData()
    });
  }

  getData(){
    this.http.getData("categorie").subscribe({
      next: (data:string)=> this.categories = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log('Observer got a complete notification')
    });
  }


}
