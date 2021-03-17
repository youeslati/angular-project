import { Produits } from './models/produits';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService implements OnInit {

 static produits: Produits[] = new Array<Produits>();


ngOnInit(){


}
  getProduits(){


    return ProduitsService.produits;
  }

  getProduitById(id: number){

    for(let produit of ProduitsService.produits){
      if(produit.idProduit==id){
        return produit;
      }
    }
  }

  addProduct(produit: Produits){


    ProduitsService.produits.push(produit);
      }


  constructor() {

    ProduitsService.produits= [new Produits('Clavier','un clavier de gaming de haute qualité','https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/clavier-1.jpg',50,1,'gdfgfbdkgfbkgfdkgbdfgk')
    , new Produits('Ordinateur','i7 10 Géneration 1024 GO 16G RAM','https://www.technopro-online.com/22399-large_default/prix-pc-de-bureau-lenovo-s510-dual-core-4go-tunisie.jpg',1300,2,'dgghgfhfghgfhgfh')

      ]

   }
}
