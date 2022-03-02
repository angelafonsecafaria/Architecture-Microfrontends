import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './views/step/step.component';

const routes: Routes = [
  {
    path: '',
    component: StepComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulacaoCotacaoRoutingModule {}
