import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { HysComponent } from './components/hys/hys.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EstudiosComponent,
    ProyectosComponent,
    PiedepaginaComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
