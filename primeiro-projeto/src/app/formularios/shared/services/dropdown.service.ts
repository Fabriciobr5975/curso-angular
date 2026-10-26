import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EstadosBr } from '../models/estados-br.model';
import { Cargo } from '../models/cargo.model';
import { Tecnologia } from '../models/tecnlogias.model';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private http: HttpClient = inject(HttpClient);

  getEstadosBr() {
    return this.http.get<EstadosBr[]>("assets/dados/estadosbr.json");
  }

  getCargos(): Cargo[] {
    return [
      { nome: "Dev", nivel: "Junior", desc: "Dev Jr" },
      { nome: "Dev", nivel: "Pleno", desc: "Dev Pl" },
      { nome: "Dev", nivel: "Senior", desc: "Dev Sr" },
    ];
  }

  getTecnologias(): Tecnologia[] {
    return [
      { nome: "java", desc: "Java" },
      { nome: "javascript", desc: "JavaScript" },
      { nome: "python", desc: "Python" },
      { nome: "php", desc: "PHP" },
      { nome: "ruby", desc: "Ruby" },
    ];
  }

  getNewsletter() {
    return [
      { valor: "s", desc: "Sim" },
      { valor: "n", desc: "Não" },
    ]
  }
}
