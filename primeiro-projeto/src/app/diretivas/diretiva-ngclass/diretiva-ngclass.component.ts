import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: false,
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.scss',
})
export class DiretivaNgclassComponent {
  meuFavorito = false;

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }
}
