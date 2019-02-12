import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ActorsComponent } from './components/tabs/actors/actors.component';
import { MoviesComponent } from './components/tabs/movies/movies.component';
import { CategoriesComponent } from './components/tabs/categories/categories.component';
import { SearchComponent } from './components/shared/search/search.component';
import { CardComponent } from './components/shared/card/card.component';
import { FormsComponent } from './components/shared/forms/forms.component';

// Services
import { CineService } from "./services/cine.service";
import { HttpClientModule } from '@angular/common/http'; 

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from '../environments/environment';
import { ReadDataComponent } from './components/shared/read-data/read-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    ActorsComponent,
    MoviesComponent,
    CategoriesComponent,
    SearchComponent,
    CardComponent,
    FormsComponent,
    ReadDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    CineService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
