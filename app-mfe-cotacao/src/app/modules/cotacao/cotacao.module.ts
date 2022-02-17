import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacaoRoutingModule } from './cotacao-routing.module';
import { StepOneCorretorComponent } from './step-one-corretor/step-one-corretor.component';


@NgModule({
  declarations: [
    StepOneCorretorComponent
  ],
  imports: [
    CommonModule,
    CotacaoRoutingModule
  ]
})
export class CotacaoModule { }
