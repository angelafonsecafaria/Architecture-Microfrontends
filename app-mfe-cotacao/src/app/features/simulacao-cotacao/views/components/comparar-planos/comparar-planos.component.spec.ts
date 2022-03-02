import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararPlanosComponent } from './comparar-planos.component';

describe('CompararPlanosComponent', () => {
  let component: CompararPlanosComponent;
  let fixture: ComponentFixture<CompararPlanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompararPlanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
