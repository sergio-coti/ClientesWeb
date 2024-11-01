import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarClientesComponent } from './cadastrar-clientes.component';

describe('CadastrarClientesComponent', () => {
  let component: CadastrarClientesComponent;
  let fixture: ComponentFixture<CadastrarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
