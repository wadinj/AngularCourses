import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-recette',
  templateUrl: './card-recette.component.html',
  styleUrls: ['./card-recette.component.css']
})
export class CardRecetteComponent implements OnInit {

  @Input('image') image: string;
  @Input('title') title: string;
  @Input('description') description: string;
  @Output('onPictureClick') onPictureClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickImage() {
    this.onPictureClick.emit(this.title);
  }
}
