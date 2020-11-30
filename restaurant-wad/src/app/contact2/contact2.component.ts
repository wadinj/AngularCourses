import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

  sujet: string;
  sujetError: string;
  request: string;
  requestError: string;
  contactForm: FormGroup;
  sujetFormControl: FormControl;
  requestFormControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.sujetFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.requestFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.contactForm = new FormGroup({
      sujet: this.sujetFormControl,
      request: this.requestFormControl,
    });
  }

  sendContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
  }

}
