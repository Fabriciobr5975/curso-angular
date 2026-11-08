import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './alert-modal.component';

describe('AlertModalComponent', () => {
  let component: AlertModalComponent;
  let fixture: ComponentFixture<AlertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertModalComponent],
      providers: [{ provide: BsModalRef, useValue: { hide: jasmine.createSpy('hide') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display values assigned to its input properties', () => {
    component.type = 'danger';
    component.message = 'Erro ao carregar cursos.';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.alert-danger')).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Erro ao carregar cursos.');
  });
});
