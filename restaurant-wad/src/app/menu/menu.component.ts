import { Component, OnInit } from '@angular/core';
import { Carte } from '../model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'restaurant-wad';
  nomUser = 'Jonathan';
  carte = Carte;
  selectedPlate: string;
  payment: boolean;

  pictureClick(title: string) {
    this.selectedPlate = title;
  }
}
