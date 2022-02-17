import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliseMedicaRoutingModule } from './analise-medica-routing.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    AnaliseMedicaRoutingModule
  ]
})
export class AnaliseMedicaModule { }
