import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CineService } from 'src/app/services/cine.service';
import { Actor } from 'src/app/interfaces/actor';
import { FirebaseData } from 'src/app/interfaces/firebase-data';

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
    }, 
    {
      nacionalidad: 'canadian',
      siglas: 'ca'
    }
  ]

  sexos=['male','female'];

  parentParams: string = '';
  formObject: Object = null;

  constructor(private ar: ActivatedRoute, private cineService: CineService) {

    this.ar.url.subscribe(parentParams => {
      this.parentParams = parentParams[0].path;
      console.log(this.parentParams);

    })

    this.ar.params.subscribe(params => {
      if(params && this.parentParams != ''){
        this.cineService.read(this.parentParams, params['id']).subscribe( (existingData: FirebaseData[]) => 
          {
            // TODO: Verificar el orden de los campos y sus valores
            if(this.parentParams === 'actors'){
              this.formObject = {
                id: params['id'],
                value1: existingData[0].data, // age
                value2: existingData[1].data, // gender
                value3: existingData[2].data, // name
                value4: existingData[3].data, // nationality
              };
              console.log('aqui' + JSON.stringify(this.formObject));
            } else if(this.parentParams === 'movies'){
              this.formObject = {
                id: params['id'],
                value1: existingData[0].data, // name
                value2: existingData[1].data, // year
                value3: existingData[2].data, // country
                value4: existingData[3].data, // genre
              };
              console.log('aqui' + JSON.stringify(this.formObject));
            } else if(this.parentParams === 'categories'){
              this.formObject = {
                id: params['id'],
                value1: existingData[0].data, // name
              };
              console.log('aqui' + JSON.stringify(this.formObject));
            }
          } );
      }   
    });
  }
  
  ngOnInit() {
    
  }

  enviar( form:NgForm ){
    // console.log(form);
    this.ar.parent.url.subscribe(prms => {
      const path = prms[0].path;
      if (path === 'update') {
        let updatable: any;
        // TODO: Agregar peliculas y categorias al switch
        switch (this.parentParams) {
          case 'actors':
          updatable = {
            age: this.formObject['value1'],
            name: this.formObject['value3'],
            gender: this.formObject['value2'],
            nationality: this.formObject['value4']
          }
          break;
          case 'movies':
          break;
          case 'categories':
          break;
        }
        this.cineService.update(this.formObject['id'], this.parentParams, updatable)
          .then(data => {
            console.log(data);
          })
          .catch(error => console.log(error));
      }
    });
    console.log(form.controls.nombre.errors.required == true);
    

  }

}
