import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }
  getPersonas(): Observable<any> {
    return null;
  }
  getPersona(persona: any): Observable<any> {
    let json = JSON.stringify(persona);
    // let headers = this.httpClient.post()
    return 
  }
  savePersona() {

  }
}
