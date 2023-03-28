import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'ajouter_annonce', component: AddAnnonceComponent },
  { path: 'une_annonce/:id', component: SingleAnnonceComponent },
  { path: 'modifier_annonce/:id', component: UpdateAnnonceComponent },
  { path: 'supprimer_annonce/:id', component: UpdateAnnonceComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
