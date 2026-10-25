import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  standalone: false,
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.scss',
})
export class FormDebugComponent {
  form = input<any>();
}
