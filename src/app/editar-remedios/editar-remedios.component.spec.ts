import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRemediosComponent } from './editar-remedios.component';

describe('EditarRemediosComponent', () => {
  let component: EditarRemediosComponent;
  let fixture: ComponentFixture<EditarRemediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRemediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRemediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
