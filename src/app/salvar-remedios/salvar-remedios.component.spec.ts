import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarRemediosComponent } from './salvar-remedios.component';

describe('SalvarRemediosComponent', () => {
  let component: SalvarRemediosComponent;
  let fixture: ComponentFixture<SalvarRemediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarRemediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarRemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
