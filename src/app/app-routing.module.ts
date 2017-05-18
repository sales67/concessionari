import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './cotxes/client/client.component';
import { MarcaComponent } from './cotxes/marca/marca.component';
import { ModelComponent } from './cotxes/model/model.component';
import { EquipamentComponent } from './cotxes/equipament/equipament.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: []
  }, {
    path: 'marca',
    component: MarcaComponent
  }, {
    path: 'model',
    component: ModelComponent
  }, {
    path: 'equipament',
    component: EquipamentComponent
  }, {
    path: 'addMarca',
    component: EquipamentComponent
  }, {
    path: 'updateMarca',
    component: EquipamentComponent
  }, {
    path: 'listMarca',
    component: EquipamentComponent
  }, {
    path: 'deleteMarca',
    component: EquipamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
