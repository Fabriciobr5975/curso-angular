import { inject, Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Curso } from './curso';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Cursos2Service extends CrudService<Curso> {

  constructor() {
    super(inject(HttpClient), `${environment.API}cursos`);

  }

}
