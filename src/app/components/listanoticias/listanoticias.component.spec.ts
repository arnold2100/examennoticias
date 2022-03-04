import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanoticiasComponent } from './listanoticias.component';

describe('ListanoticiasComponent', () => {
  let component: ListanoticiasComponent;
  let fixture: ComponentFixture<ListanoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListanoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
