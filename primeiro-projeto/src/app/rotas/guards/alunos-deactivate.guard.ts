import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { FormCandeactivate } from "./form-candeactivate";

@Injectable({ providedIn: "root" })
export class AlunoDeactivateGuard implements CanDeactivate<FormCandeactivate> {

  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {

    console.log("guarda de desativação");

    // return component.podeMudarRota();
    return component.podeDesativar();
  }

}
