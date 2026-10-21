import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Usuario } from './usuario';
import { map } from 'rxjs';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {

  usuario: Usuario = {
    nome: "",
    email: "",
  }

  private http: HttpClient = inject(HttpClient);

  verificaValidTouched(campo: NgModel): boolean {
    return (!campo.valid && campo.touched) ?? false;
  }

  aplicaCssErro(campo: NgModel) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: string, form: NgForm) {
    // limpando o cep, somente dígitos
    cep = cep.replace(/\D/g, '');

    // Expressão regular para validar o CEP
    const validaCEP = /^[0-9]{8}$/;

    // Valida o formato do CEP
    if (validaCEP.test(cep)) {
      this.resetaDadosForm(form);

      this.http.get(`//viacep.com.br/ws/${cep}/json/`)
        .pipe(map((dados) => dados))
        .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados: any, form: NgForm) {
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: form.value.endereco.numero,
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(form: NgForm) {
    form.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(this.usuario);

    this.http.post("enderecoServer/formUsuario", JSON.stringify(form.value))
      .pipe(map(res => res))
      .subscribe({
        next: (dados) => console.log(dados)
      });
  }
}
