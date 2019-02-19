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
    edad:'',
    nacionalidad: '',
    sexo: ''
  }

  nacionalidades = [
    {
      nacionalidad: 'mexicana',
      siglas: 'mx'
    },
    {
      nacionalidad: 'americana',
      siglas: 'usa'
    },
    {
      nacionalidad: 'española',
      siglas: 'es'
    }
  ]

  sexos=['Hombre','Mujer'];

  constructor() { }

  ngOnInit() {
  }

  enviar( form:NgForm ){
    console.log(form);
    
    console.log(form.controls.nombre.errors.required == true);
    

  }

}
