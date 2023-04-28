import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AnnoncesComponent }                from './annonces/annonces.component';
import { AddAnnonceComponent }              from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent }           from './update-annonce/update-annonce.component';
import { SingleAnnonceComponent }           from './single-annonce/single-annonce.component';
import { LoginComponent }                   from './login/login.component';
import { SignupComponent }                  from './signup/signup.component';
import { AboutComponent }                   from './about/about.component';
import { JoinUsComponent }                  from './join-us/join-us.component';
import { MesMessagesComponent }             from './mes-messages/mes-messages.component';
import { ChatComponent }                    from './chat/chat.component';
import { ProfilComponent }                  from './profil/profil.component';
import { HomepageComponent }                from './homepage/homepage.component';
import { UpdateUserComponent }              from './update-user/update-user.component';
import { AuthGuard }                        from './auth.guard';
import { AuthService }                      from './services/auth.service';
import { ModalModule }                      from 'ngx-bootstrap/modal';

const routes: Routes = [

  { path: 'homepage',              component: HomepageComponent                                },

  //ANNONCES
  { path: 'annonces',              component: AnnoncesComponent,     canActivate: [AuthGuard]  },
  { path: 'ajouter_annonce',       component: AddAnnonceComponent,   canActivate: [AuthGuard]  },
  { path: 'une_annonce/:id',       component: SingleAnnonceComponent,canActivate: [AuthGuard]  },
  { path: 'modifier_annonce/:id',  component: UpdateAnnonceComponent,canActivate: [AuthGuard]  },
  { path: 'supprimer_annonce/:id', component: UpdateAnnonceComponent,canActivate: [AuthGuard]  },

  // AUTHENTIFICATION
  { path: 'login',                 component: LoginComponent                                   },
  { path: 'signup',                component: SignupComponent                                  },

  // PAGES CHAT ET A PROPOS
  { path: 'about',                 component: AboutComponent                                   },
  { path: 'join_us',               component: JoinUsComponent                                  },
  { path: 'chat',                  component: ChatComponent         ,canActivate: [AuthGuard]  },
  { path: 'mes_messages',          component: MesMessagesComponent  ,canActivate: [AuthGuard]  },
  { path: 'profil',                component: ProfilComponent       ,canActivate: [AuthGuard]  },
  { path: 'update_user',           component: UpdateUserComponent   ,canActivate: [AuthGuard]  },

];

@NgModule({
  imports:   [RouterModule.forRoot(routes),ModalModule.forRoot()],
  exports:   [RouterModule,FormsModule,ReactiveFormsModule ],
  providers: [AuthService,AuthGuard]
})
export class AppRoutingModule { }
