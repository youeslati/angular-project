export class Produits {

  id: number;


  details: string;


  prix: number;


  nomProduit: string;


  descProduit: string;


  image: string;



  constructor(nomProduit:string, descProduit: string, image: string, prix:number, id: number, details:string  ){

    this.nomProduit=nomProduit;
    this.descProduit=descProduit;
    this.image=image;
    this.prix=prix;
    this.id=id;
    this.details=details;
  }


}
