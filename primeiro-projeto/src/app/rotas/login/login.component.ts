import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  private authService: AuthService = inject(AuthService);

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
