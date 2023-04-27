import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { SingleAnnonceComponent } from './single-annonce/single-annonce.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { ProfilComponent } from './profil/profil.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { MesMessagesComponent } from './mes-messages/mes-messages.component';




@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    AddAnnonceComponent,
    UpdateAnnonceComponent,
    SingleAnnonceComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ChatComponent,
    ProfilComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    JoinUsComponent,
    MesMessagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FontAwesomeModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
