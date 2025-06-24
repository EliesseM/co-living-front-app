import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  	//Chemin de la route, composant lié
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: DetailComponent },

  { path: '**', redirectTo: '' }// Route wildcard pour 404
  

];
