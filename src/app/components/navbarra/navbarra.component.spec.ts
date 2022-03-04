import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarraComponent } from './navbarra.component';

describe('NavbarraComponent', () => {
  let component: NavbarraComponent;
  let fixture: ComponentFixture<NavbarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
