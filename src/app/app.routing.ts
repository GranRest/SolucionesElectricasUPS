//importacion de modulos de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router"; 
//Importar a los componentes a los cules quiero hacer una pagina
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";

//Array de Rutas
const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'**', component:ErrorComponent}
];

//exportar el modelo de rutas
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
