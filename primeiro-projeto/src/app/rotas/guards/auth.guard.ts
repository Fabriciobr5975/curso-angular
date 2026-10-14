import { AuthService } from './../login/auth.service';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanMatch {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log("AuthGuard");
    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(["/login"]);

    return false;
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log("Verificando se o usuário pode carregar o código do módulo");

    return this.verificarAcesso();
  }
}
