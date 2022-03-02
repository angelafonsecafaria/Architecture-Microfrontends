import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { BotoesComponent } from './components/botoes/botoes.component';



@NgModule({
  declarations: [
    CardsComponent,
    BotoesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
