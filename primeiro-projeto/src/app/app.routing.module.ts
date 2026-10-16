import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './formularios/template-form/template-form.component';
import { DataFormComponent } from './formularios/data-form/data-form.component';

// import { CursoDetalheComponent } from './rotas/cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './rotas/cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosComponent } from './rotas/cursos/cursos.component';
// import { HomeComponent } from './rotas/home/home.component';
// import { LoginComponent } from './rotas/login/login.component';
// import { AuthGuard } from './rotas/guards/auth.guard';
// import { CursoGuard } from './rotas/guards/curso.guard';
// import { AlunosGuard } from './rotas/guards/alunos.guard';
// import { PaginaNaoEncontradaComponent } from './rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';

// const appRoutes: Routes = [
//   {
//     path: "cursos",
//     loadChildren: () => import('./rotas/cursos/cursos.module').then(m => m.CursosModule),
//     canActivate: [AuthGuard],
//     canActivateChild: [CursoGuard],
//     canMatch: [ AuthGuard ]
//   },
//   {
//     path: "alunos",
//     loadChildren: () => import('./rotas/alunos/alunos.module').then(m => m.AlunosModule),
//     canActivate: [AuthGuard],
//     // canActivateChild: [AlunosGuard]
//     canMatch: [ AuthGuard ]
//   },
//   // { path: "cursos", component: CursosComponent},
//   // { path: "cursos/:id", component: CursoDetalheComponent},
//   { path: "login", component: LoginComponent },
//   // { path: "naoEncontrado", component: CursoNaoEncontradoComponent },
//   { path: "home", component: HomeComponent,
//     canActivate: [AuthGuard],
//     canMatch: [ AuthGuard ]
//    },
//    { path: "", redirectTo: "/home", pathMatch: "full" },
//    { path: "**", component: PaginaNaoEncontradaComponent }
// ];

const appRoutes: Routes = [
  { path: "templateForm", component: TemplateFormComponent },
  { path: "dataForm", component: DataFormComponent },
  { path: "", pathMatch: "full", redirectTo: "templateForm" },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, /* { useHash: true } */ )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
