import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {

  usuario: Usuario = {
    nome: "",
    email: ""
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(this.usuario);
  }
}
