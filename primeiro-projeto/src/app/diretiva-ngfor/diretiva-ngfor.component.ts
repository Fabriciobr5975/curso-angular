import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: false,
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.scss',
})
export class DiretivaNgforComponent {
  cursos: string[] = ["Angular 2", "Java", "Phonegap"];
}
