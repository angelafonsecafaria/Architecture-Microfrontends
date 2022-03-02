import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCorretorComponent } from './dados-corretor.component';

describe('DadosCorretorComponent', () => {
  let component: DadosCorretorComponent;
  let fixture: ComponentFixture<DadosCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCorretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
