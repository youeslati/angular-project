import { DetailsComponent } from './details/details.component';
import { ManageProduitComponent } from './manage-produit/manage-produit.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'produits', component: ProduitsComponent},

  {path:'details/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
