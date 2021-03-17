import { ProduitsService } from './../produits.service';
import { Produits } from './../models/produits';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

//un objet de type formulaire
  formProduit : FormGroup;
  idProduit: number
  edit :boolean=  false;

  constructor(private fb: FormBuilder, private ps: ProduitsService, private route : Router, private ar: ActivatedRoute ) { }

  ngOnInit(): void {

  this.formProduit = this.fb.group({
    'nomProduit' : ['',[Validators.required]],
    'descProduit': ['',[Validators.required,Validators.minLength(6)]],
    'image': '',
    'prix': '' ,
    'id': '',
    'details': ''

  })


  this.ar.params.subscribe(

    (data)=> this.idProduit= data['id']
  )

  if(this.idProduit){
    this.edit=true;
    let prod = this.ps.getProduitById(this.idProduit)
    this.formProduit.patchValue({

      'nomProduit' : prod.nomProduit,
      'descProduit': prod.descProduit,
      'image': prod.image,
      'prix': prod.prix,
      'id': prod.idProduit,
      'details': prod.details




    })
  }





  }

  addProduit(){


    console.log(this.formProduit.value);
    let values = this.formProduit.value;

  let produit: Produits = new Produits(
    values['nomProduit'],
    values['descProduit'],
    values['image'],
    values['prix'],
    values['id'],
    values['details']
    )
    this.ps.addProduct(produit)
    this.route.navigate(['/produits']);

  }

  modifierProduit(){

    console.log(this.formProduit.value);
    let values = this.formProduit.value;

  let produit: Produits = new Produits(
    values['nomProduit'],
    values['descProduit'],
    values['image'],
    values['prix'],
    values['id'],
    values['details']
    )
    this.ps.updateProduct(produit)
    this.route.navigate(['/produits']);
  }

}
