import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Formcliente {
    formCliente: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.onValidatorCliente();
    }
    onValidatorCliente() {
        this.formCliente = this.formBuilder.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            email: ['reaveplayer@gmail.com', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]]
        });
    }
}
