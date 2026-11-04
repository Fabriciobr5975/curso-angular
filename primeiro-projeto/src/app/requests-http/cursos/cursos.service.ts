import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API_URL = 'http://localhost:3000/cursos';
  private http: HttpClient = inject(HttpClient);

  list() {
    return this.http.get<Curso[]>(this.API_URL);
  }
}
