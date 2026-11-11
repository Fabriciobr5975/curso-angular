import type { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Curso } from '../curso';
import { inject } from '@angular/core';
import { CursosService } from '../cursos.service';
import { of } from 'rxjs';

export const courseResolverGuard: ResolveFn<Curso> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if (route.params && route.params["id"]) {
    const id = Number.parseInt(route.params["id"]);
    return inject(CursosService).loadById(id);
  }

  return of<Curso>({ id: 0, nome: '' });
};
