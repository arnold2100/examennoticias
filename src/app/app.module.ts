import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from  '@angular/fire';
import { AngularFirestoreModule } from  '@angular/fire/firestore';

import { ListanoticiasComponent } from './components/listanoticias/listanoticias.component';
import { CrearnoticiasComponent } from './components/crearnoticias/crearnoticias.component';
import { NavbarraComponent } from './components/navbarra/navbarra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListanoticiasComponent,
    CrearnoticiasComponent,
    NavbarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
