import { Component, OnInit } from '@angular/core';
import { Carte } from '../model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css'],
})
export class RecetteComponent implements OnInit {
  carte;
  recette;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.carte = Carte;
    this.activatedRoute.params.subscribe((r) => {
      this.handleRoute(r.id);
    });
    if (this.activatedRoute.snapshot.params.id) {
      this.handleRoute(this.activatedRoute.snapshot.params.id);
    }
  }

  handleRoute(routeId) {
    if (routeId) {
      this.recette = this.carte.filter(c => ('' + c.imageId) === routeId)[0];
  }
}
}