export class Produits {

  private _idProduit: number;
  public get idProduit(): number {
    return this._idProduit;
  }
  public set idProduit(value: number) {
    this._idProduit = value;
  }
  private _details: string;
  public get details(): string {
    return this._details;
  }
  public set details(value: string) {
    this._details = value;
  }
  private _prix: number;
  public get prix(): number {
    return this._prix;
  }
  public set prix(value: number) {
    this._prix = value;
  }
  private _nomProduit: string;
  public get nomProduit(): string {
    return this._nomProduit;
  }
  public set nomProduit(value: string) {
    this._nomProduit = value;
  }
  private _descProduit: string;
  public get descProduit(): string {
    return this._descProduit;
  }
  public set descProduit(value: string) {
    this._descProduit = value;
  }
  private _image: string;
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }


  constructor(nomProduit:string, descProduit: string, image: string, prix:number, id: number, details:string  ){

    this.nomProduit=nomProduit;
    this.descProduit=descProduit;
    this.image=image;
    this.prix=prix;
    this.idProduit=id;
    this.details=details;
  }


}
