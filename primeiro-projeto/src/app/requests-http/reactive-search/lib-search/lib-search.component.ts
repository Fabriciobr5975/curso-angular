import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, switchMap, tap } from 'rxjs';
import { CdnjResponse, CdnjResult } from './CdnjsResponse';

@Component({
  selector: 'app-lib-search',
  standalone: false,
  templateUrl: './lib-search.component.html',
  styleUrl: './lib-search.component.scss',
})
export class LibSearchComponent implements OnInit {
  protected queryField = new FormControl<string>("");
  private readonly SEARCH_URL = "https://api.cdnjs.com/libraries";
  protected results$: Observable<CdnjResult[]> = new Observable<CdnjResult[]>();
  private fields = "name,description,version,homepage";
  protected total = 0;

  private http: HttpClient = inject(HttpClient);

  onSearch() {
    let value = String(this.queryField.value);

    // const params: Record<string, string> = {
    //   search: value,
    //   fields: fields,
    // }

    const params = new HttpParams()
      .set("search", value)
      .set("fields", this.fields);

    if (value && (value = value.trim()) !== "") {
      this.results$ = this.http.get<CdnjResponse>(this.SEARCH_URL, { params })
        .pipe(
          tap(res => this.total = res.total),
          map(res => res.results),
        );
    }
  }

  ngOnInit(): void {
      this.results$ = this.queryField.valueChanges
      .pipe(
        map(value => (value ?? "").replace(/\s/g, "")),
        filter(value => value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        // tap(console.log),
        switchMap(value => this.http.get<CdnjResponse>(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.fields,
          }
        })),
        tap(res => this.total = res.total),
        map(res => res.results),
      )
  }
}
