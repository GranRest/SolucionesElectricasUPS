import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SliderpaginasComponent } from './components/sliderpaginas/sliderpaginas.component';
import { BateriasComponent } from './components/baterias/baterias.component';
import { ElectrodosComponent } from './components/electrodos/electrodos.component';
import { ReguladoresComponent } from './components/reguladores/reguladores.component';
import { AcumuladoresComponent } from './components/acumuladores/acumuladores.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { UpsonlineComponent } from './components/upsonline/upsonline.component';
import { UpsinteractivoComponent } from './components/upsinteractivo/upsinteractivo.component';
import { ManteniupsComponent } from './components/manteniups/manteniups.component';
import { MantenielecComponent } from './components/mantenielec/mantenielec.component';
import { MantenicamarasComponent } from './components/mantenicamaras/mantenicamaras.component';
import { MantenidatosComponent } from './components/mantenidatos/mantenidatos.component';
import { MantenitableroComponent } from './components/mantenitablero/mantenitablero.component';
import { VistacatalogoComponent } from './components/vistacatalogo/vistacatalogo.component';
import { DetallecatalogoComponent } from './components/detallecatalogo/detallecatalogo.component';
import { CableadoestructuradoComponent } from './components/cableadoestructurado/cableadoestructurado.component';
import { VistaelectrodosComponent } from './components/vistascatalogos/vistaelectrodos/vistaelectrodos.component';
import { VistareguladoresComponent } from './components/vistascatalogos/vistareguladores/vistareguladores.component';
import { VistaacumuladoresComponent } from './components/vistascatalogos/vistaacumuladores/vistaacumuladores.component';
import { VistatableroComponent } from './components/vistascatalogos/vistatablero/vistatablero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CarruselComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    PreguntasComponent,
    SliderpaginasComponent,
    BateriasComponent,
    ElectrodosComponent,
    ReguladoresComponent,
    AcumuladoresComponent,
    TableroComponent,
    ContactosComponent,
    UpsonlineComponent,
    UpsinteractivoComponent,
    ManteniupsComponent,
    MantenielecComponent,
    MantenicamarasComponent,
    MantenidatosComponent,
    MantenitableroComponent,
    VistacatalogoComponent,
    DetallecatalogoComponent,
    CableadoestructuradoComponent,
    VistaelectrodosComponent,
    VistareguladoresComponent,
    VistaacumuladoresComponent,
    VistatableroComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
