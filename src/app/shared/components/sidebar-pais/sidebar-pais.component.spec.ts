import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPaisComponent } from './sidebar-pais.component';

describe('SidebarPaisComponent', () => {
  let component: SidebarPaisComponent;
  let fixture: ComponentFixture<SidebarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
