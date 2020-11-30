import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {Contact2Component} from './contact2/contact2.component';


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact2', component: Contact2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
