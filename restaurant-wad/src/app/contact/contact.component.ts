import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sujet: string;
  sujetError: string;
  request: string;
  requestError: string;
  constructor() {
  }

  ngOnInit() {
  }

  sendContact() {
    this.sujetError = undefined;
    this.requestError = undefined;
    if (!this.sujet) {
      this.sujetError = 'Le sujet est obligatoire';
      return;
    }
    if (!this.request) {
      this.requestError = 'La requête est obligatoire';
      return;
    }
    // On peut appeler un service HTTP
  }
}
