import { delay, take, tap } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API_URL = `${environment.API}cursos`;
  private http: HttpClient = inject(HttpClient);

  list() {
    return this.http.get<Curso[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadById(id: number) {
    return this.http.get<Curso>(`${this.API_URL}/${id}`)
      .pipe(take(1));
  }

  private create(curso: Curso) {
    return this.http.post(this.API_URL, { nome: curso.nome })
      .pipe(take(1));
  }

  private update(curso: Curso) {
    return this.http.put(`${this.API_URL}/${curso.id}`, { nome: curso.nome })
      .pipe(take(1));
  }

  save(curso: Curso) {
    if(curso.id) return this.update(curso);
    return this.create(curso);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
