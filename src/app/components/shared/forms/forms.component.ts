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
    correo: "kevin@email.com"
  }

  constructor() { }

  ngOnInit() {
  }

  enviar( form:NgForm ){
    console.log('Formulario Enviado');
    console.log(form);
    console.log(form.value);
    console.log(this.usuario);
    
    
    
    
  }

}
