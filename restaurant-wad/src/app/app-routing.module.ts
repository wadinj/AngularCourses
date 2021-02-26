import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {Contact2Component} from './contact2/contact2.component';
import { CardRecetteComponent } from './card-recette/card-recette.component';
import { RecetteComponent } from './recette/recette.component';
import { FullScreenLayoutComponent } from './full-screen-layout/full-screen-layout.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact2', component: Contact2Component},
  {path: 'recette/:id', component: RecetteComponent},
  {path: 'full', component: FullScreenLayoutComponent, children: [
    {path: '', component: TermsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
