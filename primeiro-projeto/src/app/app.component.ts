import { AuthService } from './rotas/login/auth.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  valor = 5;

  deletarCiclo = false;

  mostrarMenu = false;

  private authService: AuthService = inject(AuthService);

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  ngOnInit(): void {
    this.authService.mostrarMenuEmmiter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }
}
