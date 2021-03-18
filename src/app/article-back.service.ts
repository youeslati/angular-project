import { Produits } from './models/produits';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleBackService {

  constructor(private httpClient: HttpClient) { }

public getProduits(): Observable<Array<Produits>>{

return this.httpClient.get<Array<Produits>>('http://localhost:9090/produit/getproduits');

}

public save(produit: Produits){
return this.httpClient.post('http://localhost:9090/produit/save',produit);
}


public delete(id: number){

  return this.httpClient.get('http://localhost:9090/produit/delete/'+id)
}

public getProductById(id:number) :Observable<Produits>{

  return this.httpClient.get<Produits>('http://localhost:9090/produit/getOne/'+id);
}

}
