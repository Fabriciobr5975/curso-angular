import { Inject, Injectable } from "@angular/core";

@Inject({  })
// @Injectable()
export class CursosService {

  private cursos: string[] = ["Angular", "Java", "TypeScript"]

  constructor() {
    console.log("CursosService");
  }

  getCursos(): string[] {
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
  }
}
