import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  private http: HttpClient = inject(HttpClient);

  consultaCEP(cep: string) {
    // limpando o cep, somente dígitos
    cep = cep.replace(/\D/g, '');

    // Expressão regular para validar o CEP
    const validaCEP = /^[0-9]{8}$/;

    // Valida o formato do CEP
    if (validaCEP.test(cep)) {
      return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
    }

    return of({});
  }
}
