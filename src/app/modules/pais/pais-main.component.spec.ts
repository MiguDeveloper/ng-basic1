import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisMainComponent } from './pais-main.component';

describe('PaisMainComponent', () => {
  let component: PaisMainComponent;
  let fixture: ComponentFixture<PaisMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
