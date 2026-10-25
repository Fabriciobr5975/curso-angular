import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EstadosBr } from '../models/estados-br.model';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private http: HttpClient = inject(HttpClient);

  getEstadosBr() {
    return this.http.get<EstadosBr[]>("assets/dados/estadosbr.json")
      .pipe();
  }

}
