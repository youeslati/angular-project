import { ArticleBackService } from './../article-back.service';
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

  constructor(private route: Router,private arbs: ArticleBackService,
    private articleBackService: ArticleBackService

    ) {

  }


  nom : string = 'OUESLATI Yassine';
  marche: boolean= false;
  produits: Produits[] = new Array<Produits>();
  isAdmin: boolean =true;
getproduit(){

this.articleBackService.getProduits().subscribe(

  (listeProduit)=> this.produits= listeProduit,
  (err)=>console.log(err)
)


}

fermerOuvrir(){
  this.marche=!this.marche;
}


  afficheNom(){
    console.log(this.nom);
  }


  ngOnInit(): void {
   this.getproduit()

  }

  afficheProduit(idProduit : number){
    console.log('hey');
    this.route.navigate(['produit/'+idProduit]);


  }

  detailsProduit(idProduit: number){

    this.route.navigate(['/details/'+idProduit])

  }

  editer(id: number){

    this.route.navigate(['/updateproduit/'+id])
  }

  delete(id:number){


    this.articleBackService.delete(id).subscribe(

      ()=>{this.getproduit()}
    )


  }



}
