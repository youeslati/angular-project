import { AddProduitComponent } from './add-produit/add-produit.component';
import { DetailsComponent } from './details/details.component';
import { ManageProduitComponent } from './manage-produit/manage-produit.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'produits', component: ProduitsComponent},

  {path:'details/:id', component: DetailsComponent},
  {path: 'addproduit', component: AddProduitComponent},
  {path: 'rxjs', component: ObservableComponent},
  {path: 'updateproduit/:id', component: AddProduitComponent},





  {path:'update/:id', component: ManageProduitComponent},
  {path:'create', component: ManageProduitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
