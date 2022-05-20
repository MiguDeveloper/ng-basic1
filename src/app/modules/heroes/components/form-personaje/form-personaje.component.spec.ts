import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonajeComponent } from './form-personaje.component';

describe('FormPersonajeComponent', () => {
  let component: FormPersonajeComponent;
  let fixture: ComponentFixture<FormPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
