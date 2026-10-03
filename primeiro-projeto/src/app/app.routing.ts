import { ModuleWithProviders } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./rotas/home/home.component";
import { LoginComponent } from "./rotas/login/login.component";
import { CursosComponent } from "./rotas/cursos/cursos.component";

const APP_ROUTES: Routes = [
  { path: "cursos", component: CursosComponent},
  { path: "login", component: LoginComponent},
  { path: "", component: HomeComponent}
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(APP_ROUTES);
