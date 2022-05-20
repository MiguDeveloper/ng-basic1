import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPagesComponent } from './heroes-pages.component';

describe('HeroesPagesComponent', () => {
  let component: HeroesPagesComponent;
  let fixture: ComponentFixture<HeroesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
