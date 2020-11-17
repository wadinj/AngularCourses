import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-wad';
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
}
