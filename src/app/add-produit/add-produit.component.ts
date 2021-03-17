import { ProduitsService } from './../produits.service';
import { Produits } from './../models/produits';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

//un objet de type formulaire
  formProduit : FormGroup;

  constructor(private fb: FormBuilder, private ps: ProduitsService, private route : Router ) { }

  ngOnInit(): void {

  this.formProduit = this.fb.group({
    'nomProduit' : 'fudtududu',
    'descProduit': '',
    'image': '',
    'prix': '',
    'id': '',
    'details': ''

  })


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

}
