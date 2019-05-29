import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarRemediosComponent } from './pesquisar-remedios.component';

describe('PesquisarRemediosComponent', () => {
  let component: PesquisarRemediosComponent;
  let fixture: ComponentFixture<PesquisarRemediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarRemediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarRemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
