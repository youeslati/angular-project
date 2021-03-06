import { ArticleBackService } from './../article-back.service';
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

  constructor(private xxx: ProduitsService, private activatedRoute: ActivatedRoute,
    private articleBackService: ArticleBackService
    ) { }

  ngOnInit(): void {

this.activatedRoute.params.subscribe(

  data=> this.idProduit=data['id']


)

this.articleBackService.getProductById(this.idProduit).subscribe(

  (prd)=> this.produit= prd
)
    console.log(this.produit)

  }

}
