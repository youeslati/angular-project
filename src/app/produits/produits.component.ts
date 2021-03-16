import { Produits } from './../models/produits';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {


  nom : string = 'OUESLATI Yassine';
  marche: boolean= false;
  produits: Produits[] = new Array<Produits>();
  isAdmin: boolean =true;

  getProduits(){
    this.produits= [new Produits('Clavier','un clavier de gaming de haute qualité','https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/clavier-1.jpg',50)
  , new Produits('Ordinateur','i7 10 Géneration 1024 GO 16G RAM','https://www.technopro-online.com/22399-large_default/prix-pc-de-bureau-lenovo-s510-dual-core-4go-tunisie.jpg',1300)
  ]
    return this.produits;
  }

fermerOuvrir(){
  this.marche=!this.marche;
}

  afficheNom(){
    console.log(this.nom);
  }

  constructor() { }

  ngOnInit(): void {
   this.getProduits();
   console.log(this.produits)
  }

}
