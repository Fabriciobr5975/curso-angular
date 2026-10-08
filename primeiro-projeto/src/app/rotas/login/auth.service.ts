import { EventEmitter, inject, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private usuarioAutenticado = false;
  private router: Router = inject(Router);
  mostrarMenuEmmiter = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === "Teste" && usuario.senha === "123456") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmmiter.emit(this.usuarioAutenticado);
      this.router.navigate(["/"]);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(this.usuarioAutenticado);
    }
  }
}
