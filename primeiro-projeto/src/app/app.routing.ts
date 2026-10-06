import { ModuleWithProviders } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./rotas/home/home.component";
import { LoginComponent } from "./rotas/login/login.component";
import { CursosComponent } from "./rotas/cursos/cursos.component";
import { CursoDetalheComponent } from "./rotas/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./rotas/curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTES: Routes = [
  { path: "cursos", component: CursosComponent},
  { path: "cursos/:id", component: CursoDetalheComponent},
  { path: "login", component: LoginComponent},
  { path: "naoEncontrado", component: CursoNaoEncontradoComponent },
  { path: "", component: HomeComponent}
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(APP_ROUTES);
