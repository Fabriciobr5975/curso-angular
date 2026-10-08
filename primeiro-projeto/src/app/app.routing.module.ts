import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// import { CursoDetalheComponent } from './rotas/cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './rotas/cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosComponent } from './rotas/cursos/cursos.component';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';

const appRoutes: Routes = [
  { path: "cursos", loadChildren: () => import('./rotas/cursos/cursos.module').then(m => m.CursosModule) },
  { path: "alunos", loadChildren: () => import('./rotas/alunos/alunos.module').then(m => m.AlunosModule) },
  // { path: "cursos", component: CursosComponent},
  // { path: "cursos/:id", component: CursoDetalheComponent},
  { path: "login", component: LoginComponent},
  // { path: "naoEncontrado", component: CursoNaoEncontradoComponent },
  { path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
