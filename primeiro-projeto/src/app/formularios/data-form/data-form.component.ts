import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

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

  constructor() {
      // this.formulario = new FormGroup({
      //   nome: new FormControl(null),
      //   email: new FormControl(null),
      // });

      this.formulario = this.formBuilder.group({
        nome: [null],
        email: [null]
      });
   }

   onSubmit(): void {
    console.log(this.formulario.value);
    this.http.post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe({
        next: (dados) => console.log(dados)
      });
  }

  ngOnInit(): void {
    throw new Error("No Implement");
  }
}
