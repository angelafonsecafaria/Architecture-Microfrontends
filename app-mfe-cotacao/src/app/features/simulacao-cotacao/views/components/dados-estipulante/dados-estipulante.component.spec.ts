import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEstipulanteComponent } from './dados-estipulante.component';

describe('DadosEstipulanteComponent', () => {
  let component: DadosEstipulanteComponent;
  let fixture: ComponentFixture<DadosEstipulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosEstipulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosEstipulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
