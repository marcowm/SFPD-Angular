import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinaCargaComponent } from './rotina-carga-dados.component';

describe('IconsComponent', () => {
  let component: RotinaCargaComponent;
  let fixture: ComponentFixture<RotinaCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotinaCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotinaCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
