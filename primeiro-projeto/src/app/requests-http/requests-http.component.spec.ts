import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsHttpComponent } from './requests-http.component';

describe('RequestsHttpComponent', () => {
  let component: RequestsHttpComponent;
  let fixture: ComponentFixture<RequestsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestsHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
