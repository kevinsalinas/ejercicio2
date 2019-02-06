import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from "./components/create/create.component";
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ActorsComponent } from './components/tabs/actors/actors.component';
import { MoviesComponent } from './components/tabs/movies/movies.component';
import { CategoriesComponent } from './components/tabs/categories/categories.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent , 
  children: [
    { path: 'actors', component: ActorsComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'actors'}
  ]   
},

{ path: 'read', component: ReadComponent  , 
children: [
  { path: 'actors', component: ActorsComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'actors'}
] 
},
{ path: 'update', component: UpdateComponent , 
children: [
  { path: 'actors', component: ActorsComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'actors'}
] 
},
{ path: 'delete', component: DeleteComponent  , 
children: [
  { path: 'actors', component: ActorsComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'actors'}
] 
},
{ path: '**', pathMatch: 'full', redirectTo: 'create'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
