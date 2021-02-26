import { Component, OnInit } from '@angular/core';
import { HttpbinService } from '../httpbin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  uuid: string;
  categories = [
    {
      id: "blalbla",
      label: "COVID-19"
    },
    {
      id: "blalbla",
      label: "Recrutement"
    }
  ]

  constructor(private httpbinService: HttpbinService) { }

  ngOnInit() {
    console.log('ON INIT');
    this.httpbinService.getUuid().subscribe(reponse => {
      console.log(reponse);
      this.uuid = reponse.uuid;
    })
  }

}
