//importacion de modulos de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar a los componentes a los cules quiero hacer una pagina
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
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
import { MantenidatosComponent } from './components/mantenidatos/mantenidatos.component';
import { MantenicamarasComponent } from './components/mantenicamaras/mantenicamaras.component';
import { MantenitableroComponent } from './components/mantenitablero/mantenitablero.component';
import { DetallecatalogoComponent } from './components/vistascatalogos/detallecatalogo/detallecatalogo.component';
import { VistaelectrodosComponent } from './components/vistascatalogos/vistaelectrodos/vistaelectrodos.component';
import { VistareguladoresComponent } from './components/vistascatalogos/vistareguladores/vistareguladores.component';
import { VistaacumuladoresComponent } from './components/vistascatalogos/vistaacumuladores/vistaacumuladores.component';
import { VistatableroComponent } from './components/vistascatalogos/vistatablero/vistatablero.component';

//Array de Rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'baterias', component: BateriasComponent },
  { path: 'electrodos', component: ElectrodosComponent },
  { path: 'reguladores', component: ReguladoresComponent },
  { path: 'acumuladores', component: AcumuladoresComponent },
  { path: 'tablero', component: TableroComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'upsonline', component: UpsonlineComponent },
  { path: 'upsinteractivo', component: UpsinteractivoComponent },
  { path: 'manteniups', component: ManteniupsComponent },
  { path: 'mantenielec', component: MantenielecComponent },
  { path: 'mantenicamaras', component: MantenicamarasComponent },
  { path: 'mantenidatos', component: MantenidatosComponent },
  { path: 'mantenitablero', component: MantenitableroComponent },
  { path: 'detallecatalogo/:id', component: DetallecatalogoComponent },
  { path: 'vistaelectrodos/:id', component: VistaelectrodosComponent },
  { path: 'vistareguladores/:id', component: VistareguladoresComponent },
  { path: 'vistaacumulador/:id', component: VistaacumuladoresComponent },
  { path: 'detalletablero/:id', component: VistatableroComponent },
  { path: '**', component: ErrorComponent },
];

//exportar el modelo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
