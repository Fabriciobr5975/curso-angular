import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Livro {
  titulo: string;
  rating: number;
  numeroPaginas: number;
  preco: number;
  dataLancamento: Date;
  url: string;
}

@Component({
  selector: 'app-exemplos-pipes',
  standalone: false,
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss',
})
export class ExemplosPipesComponent {
  livro: Livro = {
    titulo: "Learning JavaScript Data Structures and Algorithms 2nd ed",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: "http://127.0.0.1"
  };

  livros: string[] = ["Java", "Angular"];

  filtro!: string;

  addCurso(value: string) {
    this.livros.push(value);
  }

  obterCursos(): string[] {
    if (this.livros.length === 0 || (this.filtro === undefined || this.filtro.trim() === "")) {
      return this.livros;
    }

    return this.livros.filter(v => v.toLocaleLowerCase().includes(this.filtro));
  }

  valorAsync: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Valor assíncrono"), 2000);
  });

  valorAsync2: Observable<string> = interval(2000).pipe((map(() => "Valor assíncrono 2")));
}
