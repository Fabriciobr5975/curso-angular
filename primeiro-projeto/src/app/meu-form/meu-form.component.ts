import { Component } from '@angular/core';

interface User {
  nome: string;
  idade: number
};

@Component({
  selector: 'app-meu-form',
  standalone: false,
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {
  nome = "abc";

  pessoa: User = {
    nome: "def",
    idade: 20
  }
}
