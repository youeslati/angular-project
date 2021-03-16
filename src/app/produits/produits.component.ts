import { ProduitsService } from './../produits.service';
import { Produits } from './../models/produits';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  constructor(private route: Router,private produitsService: ProduitsService ) {

  }


  nom : string = 'OUESLATI Yassine';
  marche: boolean= false;
  produits: Produits[] = new Array<Produits>();
  isAdmin: boolean =true;

  getProduits(){

    this.produits = this.produitsService.getProduits();


  }

fermerOuvrir(){
  this.marche=!this.marche;
}


  afficheNom(){
    console.log(this.nom);
  }


  ngOnInit(): void {
   this.getProduits();

  }

  afficheProduit(idProduit : number){
    console.log('hey');
    this.route.navigate(['produit/'+idProduit]);


  }

  detailsProduit(idProduit: number){

    this.route.navigate(['/details/'+idProduit])

  }



}
