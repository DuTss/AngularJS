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
import { PopupBtcComponent } from './popup-btc/popup-btc.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatComponent } from './chat/chat.component';
import { ProfilComponent } from './profil/profil.component';



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
    PopupBtcComponent,
    ChatComponent,
    ProfilComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
