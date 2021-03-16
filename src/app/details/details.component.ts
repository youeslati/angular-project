import { ActivatedRoute } from '@angular/router';
import { Produits } from './../models/produits';
import { ProduitsService } from './../produits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  produit: Produits
   idProduit: number;

  constructor(private xxx: ProduitsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

this.activatedRoute.params.subscribe(

  data=> this.idProduit=data['id']


)

this.produit=this.xxx.getProduitById(this.idProduit);
    console.log(this.produit)

  }

}
