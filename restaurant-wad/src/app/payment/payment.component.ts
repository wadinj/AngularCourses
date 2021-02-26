import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  title = 'Paiement';
  @Input('userName') userName: string;
  @Output('onPayment') onPayment = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

  payer() {
    this.onPayment.emit();
  }
}
