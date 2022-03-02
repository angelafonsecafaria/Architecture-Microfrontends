import { TestBed } from '@angular/core/testing';

import { SimulacaoCotacaoService } from './simulacao-cotacao.service';

describe('SimulacaoCotacaoService', () => {
  let service: SimulacaoCotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulacaoCotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
