import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor( private http: HttpClient ) {  }

  getData( table:string, id:any=null ): Observable<any> {
    console.log('table : ', table, id);
    
    if(id != null){
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readOne&id='+id);

    }else{
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readAll');
    }
  }

  deleteData( table: string, id:any ): Observable<any> {
    return this.http.post('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=delete&id='+ id, {} );
    // return this.getData(table);
  }

  postData(table:string, data:JSON ): Observable<any> {
    return this.http.post('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=create', JSON.stringify(data) );
    // return this.getData(table);

  }
  
/**
 * On récupere les ingredients d'une recette par id_recette
 * @param table 
 * @param id 
 * @returns 
 */
  getIngredientByIdRecipe(table:string, id:any=null): Observable<any> {

    if(id != null){
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readIngredients&id=' + id);

    }else{
      return this.http.get('http://localhost/angular/marmitonne/src/app/services/api/' + table + '.php?action=readAll');
    }

  }


}
