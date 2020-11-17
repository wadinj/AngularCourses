import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-recette',
  templateUrl: './card-recette.component.html',
  styleUrls: ['./card-recette.component.css']
})
export class CardRecetteComponent implements OnInit {

  @Input('image') image: string;
  @Input('title') title: string;
  @Input('description') description: string;

  constructor() { }

  ngOnInit(): void {
  }

}