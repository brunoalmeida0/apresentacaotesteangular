import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarRemediosComponent } from './salvar-remedios.component';
import { AppModule } from '../app.module';
import { of } from 'rxjs';
import { Remedio } from '../models/Remedio';

describe('SalvarRemediosComponent', () => {
  let component: SalvarRemediosComponent;
  let fixture: ComponentFixture<SalvarRemediosComponent>;
  let remediosServiceSpy;
  let routerSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarRemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    remediosServiceSpy = jasmine.createSpyObj('RemediosService', ['salvarRemedio']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('salvarRemedio deve salvar o remédio', () => {
    let remedioStub = new Remedio();
    remedioStub.nome = "Teste Nome";
    remedioStub.fabricante = "Teste fabricante";
    remedioStub.validade = new Date(2020, 11, 2);
    remedioStub.quantidadeEstoque = 2;
    remedioStub.tarjaPreta = false;
    remedioStub.preco = 10.50;

    remediosServiceSpy.salvarRemedio.and.returnValue(of(remedioStub));

    component.salvarFormGroup.get('nome').setValue(remedioStub.nome);
    component.salvarFormGroup.get('fabricante').setValue(remedioStub.fabricante);
    component.salvarFormGroup.get('validade').setValue(remedioStub.validade);
    component.salvarFormGroup.get('quantidadeEstoque').setValue(remedioStub.quantidadeEstoque);
    component.salvarFormGroup.get('tarjaPreta').setValue(remedioStub.tarjaPreta);
    component.salvarFormGroup.get('preco').setValue(remedioStub.preco);
    component.salvarRemedio();

    expect(component.remedioSalvo.nome).toBe(remedioStub.nome); 
    expect(component.remedioSalvo.fabricante).toBe(remedioStub.fabricante); 
    expect(component.remedioSalvo.validade).toBe(remedioStub.validade); 
    expect(component.remedioSalvo.quantidadeEstoque).toBe(remedioStub.quantidadeEstoque); 
    expect(component.remedioSalvo.tarjaPreta).toBe(remedioStub.tarjaPreta); 
    expect(component.remedioSalvo.preco).toBe(remedioStub.preco); 
  })

  it('salvarRemedio não deve salvar remédio vencido', () => {
    let remedioStub = new Remedio();
    remedioStub.nome = "Teste Nome";
    remedioStub.fabricante = "Teste fabricante";
    remedioStub.validade = new Date(2010, 3, 4);
    remedioStub.quantidadeEstoque = 2;
    remedioStub.tarjaPreta = false;
    remedioStub.preco = 10.50;

    remediosServiceSpy.salvarRemedio.and.returnValue(of(remedioStub));

    component.salvarFormGroup.get('nome').setValue(remedioStub.nome);
    component.salvarFormGroup.get('fabricante').setValue(remedioStub.fabricante);
    component.salvarFormGroup.get('validade').setValue(remedioStub.validade);
    component.salvarFormGroup.get('quantidadeEstoque').setValue(remedioStub.quantidadeEstoque);
    component.salvarFormGroup.get('tarjaPreta').setValue(remedioStub.tarjaPreta);
    component.salvarFormGroup.get('preco').setValue(remedioStub.preco);
    component.salvarRemedio();

    expect(remediosServiceSpy.salvarRemedio).toHaveBeenCalledTimes(0);
  })

  it('salvarRemedio não deve salvar remédio sem estoque', () => {
    let remedioStub = new Remedio();
    remedioStub.nome = "Teste Nome";
    remedioStub.fabricante = "Teste fabricante";
    remedioStub.validade = new Date(2022, 3, 4);
    remedioStub.quantidadeEstoque = 0;
    remedioStub.tarjaPreta = false;
    remedioStub.preco = 10.50;

    remediosServiceSpy.salvarRemedio.and.returnValue(of(remedioStub));

    component.salvarFormGroup.get('nome').setValue(remedioStub.nome);
    component.salvarFormGroup.get('fabricante').setValue(remedioStub.fabricante);
    component.salvarFormGroup.get('validade').setValue(remedioStub.validade);
    component.salvarFormGroup.get('quantidadeEstoque').setValue(remedioStub.quantidadeEstoque);
    component.salvarFormGroup.get('tarjaPreta').setValue(remedioStub.tarjaPreta);
    component.salvarFormGroup.get('preco').setValue(remedioStub.preco);
    component.salvarRemedio();

    expect(remediosServiceSpy.salvarRemedio).toHaveBeenCalledTimes(0); 
  })

  


});