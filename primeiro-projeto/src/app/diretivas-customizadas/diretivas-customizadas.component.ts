import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: false,
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.scss',
})
export class DiretivasCustomizadasComponent {

  mostrarCursos = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
