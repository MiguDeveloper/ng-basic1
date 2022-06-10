import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMainComponent } from './pipe-main.component';

describe('PipeMainComponent', () => {
  let component: PipeMainComponent;
  let fixture: ComponentFixture<PipeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
