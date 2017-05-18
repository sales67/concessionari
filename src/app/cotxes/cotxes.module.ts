import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { MarcaComponent } from './marca/marca.component';
import { EquipamentComponent } from './equipament/equipament.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ClientComponent,
      MarcaComponent,
      EquipamentComponent,
      ModelComponent
  ]
})
export class CotxesModule { }


