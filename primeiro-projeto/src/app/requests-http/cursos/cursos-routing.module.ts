import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { courseResolverGuard } from './guards/course-resolver-guard';

const routes: Routes = [
  { path: "", component: CursosListaComponent },
  {
    path: "novo",
    component: CursosFormComponent,
    resolve: { curso: courseResolverGuard }
  },
  {
    path: "editar/:id",
    component: CursosFormComponent,
    resolve: { curso: courseResolverGuard }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
