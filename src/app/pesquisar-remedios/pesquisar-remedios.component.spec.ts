import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarRemediosComponent } from './pesquisar-remedios.component';
import { AppModule } from './../app.module';
import { RemediosService } from '../services/remedios-service.service';
import { BancoDeDadosRemedio } from '../services/bancoDeDadosRemedio';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('PesquisarRemediosComponent', () => {
  let component: PesquisarRemediosComponent;
  let fixture: ComponentFixture<PesquisarRemediosComponent>;
  let remediosServiceSpy;
  let routerSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PesquisarRemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    remediosServiceSpy = jasmine.createSpyObj('RemediosService', ['buscaTodosOsRemedios', 'removerRemedio']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    component['remediosService'] = remediosServiceSpy;
    component.router = routerSpy;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getRemedios deve retornar todos os remédios', () => {    
    const stubValue = BancoDeDadosRemedio.REMEDIOS;
    remediosServiceSpy.buscaTodosOsRemedios.and.returnValue(of(stubValue));
    component.getRemedios();

    expect(component.dataSource.data).toBe(stubValue);
    expect(remediosServiceSpy.buscaTodosOsRemedios).toHaveBeenCalled(); 
    expect(remediosServiceSpy.buscaTodosOsRemedios).toHaveBeenCalledTimes(1); 
  })

  it('pesquisarRemedio deve retornar o remédio com o nome digitado', () => {
    let inputPesquisa = fixture.debugElement.query(By.css("#inputPesquisa")).nativeElement;
    let btnPesquisa = fixture.debugElement.query(By.css('#btnPesquisa'));
    inputPesquisa.value = "Aspirina";
    inputPesquisa.dispatchEvent(new Event('input'));
    btnPesquisa.triggerEventHandler('click', null);
    
    expect(component.dataSource.data[0].nome.toLowerCase()).toBe('aspirina');
  })

  it('pesquisarRemedio com nome que não existe não deve retornar nada', () => {
    let inputPesquisa = fixture.debugElement.query(By.css("#inputPesquisa")).nativeElement;
    let btnPesquisa = fixture.debugElement.query(By.css('#btnPesquisa'));
    inputPesquisa.value = "Aspirina123";
    inputPesquisa.dispatchEvent(new Event('input'));
    btnPesquisa.triggerEventHandler('click', null);
    
    expect(component.dataSource.data.length).toEqual(0);
  })

  it('limparPesquisa deve limpar o input e resgatar todos os remédios', () => {
    const stubValue = BancoDeDadosRemedio.REMEDIOS;
    let btnLimparPesquisa = fixture.debugElement.query(By.css('#btnLimparPesquisa'));  
    let inputPesquisa = fixture.debugElement.query(By.css("#inputPesquisa")).nativeElement;
    btnLimparPesquisa.triggerEventHandler('click', null);  
    expect(component.dataSource.data).toBe(stubValue);
    expect(inputPesquisa.value).toEqual('');
  })

  it('removerRemedio deve lançar uma exceção', () => {
    let tamanhoOriginal = component.dataSource.data.length;
    const remedios = BancoDeDadosRemedio.REMEDIOS;
    let remedioParaDeletar = remedios[1];
    let index = BancoDeDadosRemedio.REMEDIOS.indexOf(remedioParaDeletar);
    let arrayComRemedioDeletado = BancoDeDadosRemedio.REMEDIOS.splice(index, 1);
    remediosServiceSpy.removerRemedio.and.returnValue(of(arrayComRemedioDeletado));
    expect(component.removerRemedio).toThrow();
  })

  it('removerRemedio deve remover um remédio', () => {
    const remedios = BancoDeDadosRemedio.REMEDIOS;
    let remedioParaDeletar = remedios[1];
    let index = BancoDeDadosRemedio.REMEDIOS.indexOf(remedioParaDeletar);
    let arrayComRemedioDeletado = BancoDeDadosRemedio.REMEDIOS.splice(index, 1);
    remediosServiceSpy.removerRemedio.and.returnValue(of(arrayComRemedioDeletado));
    component.removerRemedio(remedioParaDeletar);
    let teste = component.dataSource.data.indexOf(remedioParaDeletar);
    expect(teste).toBe(-1);
  })

});
