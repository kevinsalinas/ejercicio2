import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  usuario:Object = {
    nombre: "Kevin",
    apellido: "Salinas",
    correo: "kevin@email.com",
    pais: '',
    sexo: 'Hombre'
  }

  paises = [
    {
      pais: 'mexico',
      siglas: 'mx'
    },
    {
      pais: 'estados unidos',
      siglas: 'usa'
    },
    {
      pais: 'españa',
      siglas: 'es'
    }
  ]

  sexos=['Hombre','Mujer'];

  constructor() { }

  ngOnInit() {
  }

  enviar( form:NgForm ){
    // console.log(form);
    
    console.log(form.controls.nombre.errors.required == true);
    

  }

}
