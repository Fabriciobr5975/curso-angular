import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = "https://loaine.com";
  cursoAngular: boolean = true;
  urlImage: string = "https://tse4.mm.bing.net/th/id/OIP._uOjxqrSeMyqX_VW6kj25AHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  nome: string = "abc";

  pessoa: any = {
    nome: "def",
    idade: 20
  }

  nomeCurso: string = "Angular";

  valorInicial: number = 15;

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado(): void {
    alert("Botão clicado!");
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }
}
