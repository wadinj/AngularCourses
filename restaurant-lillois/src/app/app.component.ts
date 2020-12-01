import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 compteur = 0;
  recompenses = ['Grand ma', 'Cursor', 'Usine'];

 direBonjour() {
   return 'Bonjour';
 }

}
