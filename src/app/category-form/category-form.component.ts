import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/api/http.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})

export class CategoryFormComponent implements OnInit{
  table: string = 'categorie';

  id: string | null = '0';
  category = new Category;

  constructor( 
    // private rc: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
  }


  formulaire1( form: NgForm , id:any ){
 
    this.http.postData( this.table , form.value )
        .subscribe({
            next: (data:string )=>console.log(data),
            error: (err: Error )=>console.error('Observer got an error: '+ err ),
            complete: ()=>this.router.navigate(['listCategory'])
            // complete: ()=>console.log('Observer got a complete notification')
           });
    
    // this.router.navigate(['listCategory']); // equivalent à header: location
  
  }

  

}




   // this.wait = this.http.post('http://localhost/angular/marmitonne/src/app/services/api/categorie.php?action=create', 
    // JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response);});
    
   
    // this.reponse =  this.async.waitForResponse(this.wait);
    // console.log(this.reponse);
