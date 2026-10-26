import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadosBr } from '../shared/models/estados-br.model';
import { Cargo } from '../shared/models/cargo.model';
import { Tecnologia } from '../shared/models/tecnlogias.model';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss',
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private http: HttpClient = inject(HttpClient);
  private dropdownService: DropdownService = inject(DropdownService);
  estados!: Observable<EstadosBr[]>;
  // estados$ = this.dropdownService.getEstadosBr();
  cargos: Cargo[] = [];
  tecnologias: Tecnologia[] = [];
  newsletterOp: any[] = [];

  private consultaCepService = inject(ConsultaCepService);

  constructor() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //   }),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, [Validators.required, Validators.requiredTrue, Validators.pattern("true")]]
    });
  }

  onSubmit(): void {
    console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.http.post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
        .pipe(map(res => res))
        .subscribe({
          next: (dados) => {
            console.log(dados);
            // Reseta formulário
            // this.formulario.reset();
            this.resetar();
          },
          error: (error) => {
            alert("Erro");
            console.log(error);
          },
          complete: () => console.log("Requisição completa")
        });
    } else {
      console.log("Formulário inválido");
      // this.formulario.markAllAsDirty();
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();

      if (controle instanceof FormGroup)
        this.verificaValidacoesForm(controle);
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string): boolean {
    const control = this.formulario.get(campo);
    if (!control) return false;
    return (!control.valid && (control.touched || control.dirty));
  }

  verificaEmailInvalido(): boolean {
    const campoEmail = this.formulario.get("email");
    if (campoEmail?.errors)
      return campoEmail.errors["email"] && (campoEmail?.touched ?? false);

    return false;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP() {
    const cep: string = this.formulario.get("endereco.cep")?.value;

    if (cep !== null && cep !== "") {
      this.consultaCepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.formulario.get("nome")?.setValue("Loaine");
  }

  resetaDadosForm() {
    this.formulario.patchValue({
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

  setarCargo() {
    const cargo: Cargo = { nome: "Dev", nivel: "Pleno", desc: "Dev Pl" };
    this.formulario.get("cargo")?.setValue(cargo);
  }

  setarTecnologia() {
    this.formulario.get("tecnologias")?.setValue(["java", "javascript", "php"]);
  }

  compararCargos(obj1: Cargo, obj2: Cargo) {
    return obj1 && obj2 ?
      (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel)
      : obj1 === obj2;
  }

  ngOnInit(): void {
    this.estados = this.dropdownService.getEstadosBr();
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();
    // this.dropdownService.getEstadosBr()
    //   .subscribe((dados: EstadosBr[]) => {
    //     this.estados.push(...dados);
    //     console.log(dados);
    //   });
  }
}
