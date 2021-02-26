import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpbinService {

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get('https://httpbin.org/' + id);
  }
  
  getUuid() {
    return this.http.get('https://httpbin.org/uuid'); // ddddd-ddddd-ddddd-ddddd-ddddd
  }
}
