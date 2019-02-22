import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() formType: Object;
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

  constructor() { 
  }
  
  ngOnInit() {
    console.log(this.formType);
  }

  enviar( form:NgForm ){
    console.log(form);
    
    console.log(form.controls.nombre.errors.required == true);
    

  }

}
