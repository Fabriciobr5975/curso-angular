import { Injectable } from '@angular/core';

interface Cursos {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  getCursos(): Cursos[] {
    return [
      { id: 1, nome: "Angular" },
      { id: 2, nome: "Java" },
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    return cursos.find(curso => curso.id === id);
  }
}
