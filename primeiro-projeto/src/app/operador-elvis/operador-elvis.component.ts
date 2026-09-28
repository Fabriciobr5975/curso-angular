import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: false,
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss',
})
export class OperadorElvisComponent {
  tarefa: any = {
    desc: "Descrição da tarefa",
    responsavel: {
      usuario: null,
    },
  };
}
