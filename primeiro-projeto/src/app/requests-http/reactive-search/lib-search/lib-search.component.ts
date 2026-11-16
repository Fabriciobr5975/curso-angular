import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lib-search',
  standalone: false,
  templateUrl: './lib-search.component.html',
  styleUrl: './lib-search.component.scss',
})
export class LibSearchComponent {
  protected queryField = new FormControl([]);

  onSearch() {
    console.log(this.queryField.value);
  }
}
