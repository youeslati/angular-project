import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {


  nom : string = 'OUESLATI Yassine';
  marche: boolean= false;

fermerOuvrir(){
  this.marche=!this.marche;
}

  afficheNom(){
    console.log(this.nom);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
