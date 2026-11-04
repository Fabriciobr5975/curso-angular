import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { asapScheduler, distinctUntilChanged, empty, EMPTY, map, Observable, of, scheduled, switchMap, tap } from 'rxjs';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { FormValidations } from '../shared/form-validations';
import { Cargo } from '../shared/models/cargo.model';
import { EstadosBr } from '../shared/models/estados-br.model';
import { Tecnologia } from '../shared/models/tecnlogias.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { VerificaEmail } from './service/verifica-email';
import { Cidade } from '../shared/models/cidade';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  // formulario: FormGroup;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private http: HttpClient = inject(HttpClient);
  private dropdownService: DropdownService = inject(DropdownService);
  // estados!: Observable<EstadosBr[]>;
  cidades!: Cidade[];
  estados!: EstadosBr[];
  cargos: Cargo[] = [];
  tecnologias: Tecnologia[] = [];
  newsletterOp: any[] = [];

  frameworks: string[] = ["Angular", "React", "Vue", "Sencha"];

  private consultaCepService = inject(ConsultaCepService);
  private verificaEmail: VerificaEmail = inject(VerificaEmail);

  constructor() {
    super();
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //   }),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, Validators.compose([Validators.required, Validators.email]), [this.validarEmail.bind(this)]],
      confirmarEmail: [null, FormValidations.equalsTo("email")],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
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
      termos: [null, [Validators.required, Validators.requiredTrue, Validators.pattern("true")]],
      frameworks: this.buildFrameworks()
    });

    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);
  }

  buildFrameworks() {
    const values = this.frameworks.map(() => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
    /* return [
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ];*/
  }

  verificarCepInvalido(): boolean {
    return this.formulario.get('endereco.cep')?.hasError("cepInvalido") ?? false;
  }

  /*requiredMinCheckbox(min = 1) {
    const validator: ValidatorFn = (formArray: AbstractControl) => {
      // const values = formArray.controls;
      // let totalChecked = 0;
      // for (const item of values) {
      //   if(item.value) {
      //     totalChecked++;
      //   }
      // }
      const totalChecked = (formArray as FormArray).controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }*/

  submit(): void {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: boolean, i: number) => v ? this.frameworks[i] : null)
        .filter((v: boolean) => v !== null),
    });

    console.log(valueSubmit);

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
  }

  verificaEmailInvalido(): boolean {
    const campoEmail = this.formulario.get("email");
    if (campoEmail?.errors)
      return campoEmail.errors["email"] && (campoEmail?.touched ?? false);

    return false;
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

  validarEmail(FormControl: FormControl) {
    return this.verificaEmail.verificarEmail(FormControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

  ngOnInit(): void {
    // this.verificaEmail.verificarEmail("email@email.com").subscribe();
    this.formulario.get("endereco.cep")?.statusChanges
      .pipe(
        distinctUntilChanged(), // Só captura o valor quando houver mudanças
        tap(value => console.log("Status do CEP: ", value)),
        switchMap(status => status === "VALID" ?
          this.consultaCepService.consultaCEP(this.formulario.get("endereco.cep")?.value)
          : scheduled(of(null), asapScheduler) // ou EMPTY
        ), // Ele pega um valor e retorna um observable executando um lógica para isso
      )
      .subscribe({
        next: dados => dados ? this.populaDadosForm(dados) : {}
      });

    // this.estados = this.dropdownService.getEstadosBr();
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    this.formulario.get("endereco.estado")?.valueChanges
      .pipe(
        tap(estado => console.log("Novo Estado: ", estado)),
        map(estado => this.estados.filter(e => e.sigla === estado)),
        map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
        switchMap(estadoId => this.dropdownService.getCidades(Number(estadoId))),
        tap(console.log)
      )
      .subscribe(cidades => this.cidades = cidades);

    // this.formulario.get('endereco.estado')?.valueChanges
    //   .pipe(
    //     switchMap(sigla => this.estados.pipe(
    //       map(estados => estados.filter(estado => estado.sigla === sigla)),
    //       map(estados => estados[0].id),
    //       switchMap(id => this.dropdownService.getCidades(id).pipe(
    //         map((cidades: Cidade[]) => this.cidades = cidades)
    //       ))
    //     )),
    //   ).subscribe();


    // this.dropdownService.getCidades(26).subscribe(console.log);

    // this.dropdownService.getEstadosBr()
    //   .subscribe((dados: EstadosBr[]) => {
    //     this.estados.push(...dados);
    //     console.log(dados);
    //   });

    // this.formulario.statusChanges;
    // this.formulario.valueChanges;
  }
}
