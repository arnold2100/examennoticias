import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearnoticiasComponent } from './crearnoticias.component';

describe('CrearnoticiasComponent', () => {
  let component: CrearnoticiasComponent;
  let fixture: ComponentFixture<CrearnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearnoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
