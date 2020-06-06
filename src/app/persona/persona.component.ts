import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  personas: any = {
    nombre: '',
    apellido: '',
    edad: ''
  }
  constructor(private personaService: PersonaService) { }

  ngOnInit() { }
  deletePersona(id) {
    console.log(id);
  }
  savePersona() {
    console.log('save person');
  }
}
