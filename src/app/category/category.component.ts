import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/api/http.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  table: string = "categorie";
  categories!: Category[]; 
  newCategory = new Category;

  constructor( 
        private http: HttpService
      ){ };// injection d'un HttpService

  ngOnInit(): void{
 
    this.getCategories();
  }

  getCategories(){
    this.http.getData(this.table).subscribe({
      next: (data:Category[])=> this.categories = (data),
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=>console.log('Observer got a complete notification')
    });
  }
  
  delete(id:any){
    // console.log(id);
    this.http.deleteData('categorie', id)
    .subscribe({
      error: (err: Error )=>console.error('Observer got an error: '+ err ),
      complete: ()=> this.getCategories()
    });
  }

  onSaveClick(){
    this.http.postObject( this.table , this.newCategory )
    .subscribe({
        next: (response:Category )=>{
                  this.categories.push(response);
                  this.getCategories();
              },
        error: (err: Error )=>console.error('Observer got an error: '+ err ),
        // complete: ()=>this.router.navigate(['listCategory'])
        complete: ()=> {
                  this.newCategory.id = 0;
                  this.newCategory.titre = '';
              }
       });
  }

}
