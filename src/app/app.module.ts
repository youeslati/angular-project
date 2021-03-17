import { TestService } from './services/test.service';
import { ProduitsService } from './produits.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitsComponent } from './produits/produits.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { ManageProduitComponent } from './manage-produit/manage-produit.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HomeComponent,
    ProduitComponent,
    ManageProduitComponent,
    DetailsComponent,
    TestComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
