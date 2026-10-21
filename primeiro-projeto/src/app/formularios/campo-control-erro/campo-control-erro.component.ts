import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  standalone: false,
  templateUrl: './campo-control-erro.component.html',
  styleUrl: './campo-control-erro.component.scss',
})
export class CampoControlErroComponent {

  // mostrarErro = input<boolean>(false);
  @Input() mostrarErro = false;
  @Input() msgErro = '';
}
