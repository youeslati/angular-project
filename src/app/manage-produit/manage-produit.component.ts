import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-produit',
  templateUrl: './manage-produit.component.html',
  styleUrls: ['./manage-produit.component.scss']
})
export class ManageProduitComponent implements OnInit {


produit: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

}
