import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: false,
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  cursos: string[] = ["Angular"];

  mostrarCursos = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
