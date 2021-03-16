import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) {




   }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      (data)=>console.log(data['id'])

    )
  }

}
