import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  standalone: false,
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.scss',
})
export class DiretivaNgstyleComponent {
  ativo = false;
  tamanhoFonte = 16;

  mudarAtivo() {
    this.ativo = !this.ativo;
  }
}
