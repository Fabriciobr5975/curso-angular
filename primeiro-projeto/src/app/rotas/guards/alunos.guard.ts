import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlunosGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    // console.log(childRoute);
    // console.log(state);

    console.log("AlunoGuard: Guarda de rota filha");

    if (state.url.includes("editar")) {
      // alert("Usuário sem acesso");
      // return false;
    }

    return true;
  }

}
