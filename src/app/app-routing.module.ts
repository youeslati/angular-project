import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'produits', component: ProduitsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
