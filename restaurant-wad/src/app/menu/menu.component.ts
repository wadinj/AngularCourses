import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'restaurant-wad';
  nomUser = 'Jonathan';
  carte = [
    {
      image: 'assets/images/sushi-1.jpg',
      title: 'Spider Rolls',
      description: 'Crabe, avocat, tobiko, mangue, mayonnaise'
    },
    {
      image: 'assets/images/sushi-2.jpg',
      title: 'Katamina Rolls',
      description: 'Saumon, avocat, tobiko'
    },
    {
      image: 'assets/images/sushi-3.jpg',
      title: 'Sushi Bowl',
      description: 'Saumon, wasabi, gingembre'
    },
    {
      image: 'assets/images/sushi-4.jpg',
      title: 'Sushi Plate',
      description: 'Saumon, avocat, sésame'
    },
    {
      image: 'assets/images/sushi-5.jpg',
      title: 'Sesame Rolls',
      description: 'Sésame, concombre, avocat, saumon'
    },
    {
      image: 'assets/images/sushi-6.jpeg',
      title: 'California Rolls',
      description: 'Saumont, avocat'
    },
    {
      image: 'assets/images/sushi-7.jpg',
      title: 'Cheese Roll',
      description: 'Fromage, saumon, saumon mi-cuit,'
    }
  ];
  selectedPlate: string;
  payment: boolean;

  pictureClick(title: string) {
    this.selectedPlate = title;
  }
}
