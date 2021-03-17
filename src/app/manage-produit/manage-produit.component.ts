import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-produit',
  templateUrl: './manage-produit.component.html',
  styleUrls: ['./manage-produit.component.scss']
})
export class ManageProduitComponent implements OnInit {


produit: FormGroup;
submitted:boolean= false;
id:number;


  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }



   p= {'idproduit':1,'nomProduit':'ffdf'}

  ngOnInit(): void {

    this.route.params.subscribe(
(data)=>this.id=data['id']

    )


this.produit=this.fb.group(
{

  idProduit: ['',Validators.required],
  'nomProduit': ''
}



)

if(this.id){

  this.produit.patchValue(

    {idProduit:this.p.idproduit,
    nomProduit:this.p.nomProduit
    }
  )
}
  }

  save(){
    this.submitted=true
    console.log(this.produit.value);
  }

}
