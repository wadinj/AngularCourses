import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardRecetteComponent } from './card-recette/card-recette.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Contact2Component } from './contact2/contact2.component';
import { PaymentComponent } from './payment/payment.component';
import { RecetteComponent } from './recette/recette.component';
import { FullScreenLayoutComponent } from './full-screen-layout/full-screen-layout.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    CardRecetteComponent,
    ContactComponent,
    MenuComponent,
    Contact2Component,
    PaymentComponent,
    RecetteComponent,
    FullScreenLayoutComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
