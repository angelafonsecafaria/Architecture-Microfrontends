import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoCotacaoRoutingModule } from './simulacao-cotacao-routing.module';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';
import { DadosCorretorComponent } from './views/components/dados-corretor/dados-corretor.component';
import { StepComponent } from './views/step/step.component';



@NgModule({
  declarations: [
    CpfPipe,
    StepComponent,
  ],
  imports: [
    CommonModule,
    SimulacaoCotacaoRoutingModule
  ]
})
export class SimulacaoCotacaoModule { }
