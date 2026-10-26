import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
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
    email: "",
  }

  private http: HttpClient = inject(HttpClient);
  private consultaCepService = inject(ConsultaCepService);

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

    if (cep !== null && cep !== "") {
      this.consultaCepService.consultaCEP(cep)
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

  onSubmit(formulario: NgForm): void {
    console.log(formulario);
    console.log(this.usuario);

    this.http.post("https://httpbin.org/post", JSON.stringify(formulario.value))
      .subscribe({
        next: (dados) => {
          console.log(dados);
          formulario.form.reset();
        }
      });
  }
}
