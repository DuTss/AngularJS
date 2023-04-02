import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'annonces', component: AnnoncesComponent,canActivate: [AuthGuard] },
  { path: 'ajouter_annonce', component: AddAnnonceComponent,canActivate: [AuthGuard]  },
  { path: 'une_annonce/:id', component: SingleAnnonceComponent,canActivate: [AuthGuard]  },
  { path: 'modifier_annonce/:id', component: UpdateAnnonceComponent,canActivate: [AuthGuard]  },
  { path: 'supprimer_annonce/:id', component: UpdateAnnonceComponent,canActivate: [AuthGuard]  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule,ReactiveFormsModule ],
  providers: [AuthService,AuthGuard]
})
export class AppRoutingModule { }
