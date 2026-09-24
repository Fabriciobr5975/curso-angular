import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
