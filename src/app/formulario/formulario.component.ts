import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Formcliente } from '../validators/formcliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formCliente: FormGroup;
  constructor(private formBuilder: FormBuilder, private formclienteV: Formcliente) {
    this.formCliente = formclienteV.formCliente;
  }

  ngOnInit() {
  }

  formClienteValidators() {
   /* this.formCliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['reaveplayer@gmail.com', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]], // , Validators.pattern('[^ @]*@[^ @]*')
    });*/
  }
  submit(parametros) {
    const nombre = parametros;
    console.log(nombre);
  }

}
