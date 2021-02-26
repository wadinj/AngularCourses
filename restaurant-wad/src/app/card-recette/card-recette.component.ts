import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-recette',
  templateUrl: './card-recette.component.html',
  styleUrls: ['./card-recette.component.css']
})
export class CardRecetteComponent implements OnInit {

  @Input('image') image: string;
  @Input('imageId') imageId: number;
  @Input('title') title: string;
  @Input('description') description: string;
  @Output('onPictureClick') onPictureClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.imageId);
  }

  clickImage(imageId: number) {
    console.log(this.imageId);
    this.onPictureClick.emit(this.title);
    this.router.navigate(['/recette/' + imageId]);

  }
}
