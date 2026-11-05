import { delay, tap } from 'rxjs';
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
    console.log(this.API_URL);

    return this.http.get<Curso[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
}
