import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";

// @Injectable({ providedIn: "root" })
// export class AlunoDetalheResolver implements Resolve<Aluno> {

//   private alunoService: AlunosService = inject(AlunosService);

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Aluno | RedirectCommand> {

//     const id = Number(route.params["id"]);

//     return this.alunoService.getAluno(id)!;

//   }

// }


export const AlunoDetalheResolver: ResolveFn<Aluno> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log("AlunoDetalheResolver");
  const alunoService: AlunosService = inject(AlunosService);
  const id = Number(route.params["id"]);
  return alunoService.getAluno(id)!;
};
