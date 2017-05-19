import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './cotxes/client/client.component';
import {AddMarcaComponent} from './cotxes/marca/addMarca/addMarca.component';
import {UpdateMarcaComponent} from './cotxes/marca/updateMarca/updateMarca.component';
import {ListMarcaComponent} from './cotxes/marca/listMarca/listMarca.component';
import {DeleteMarcaComponent} from './cotxes/marca/deleteMarca/deleteMarca.component';
import { MarcaComponent } from './cotxes/marca/marca.component';
import { ModelComponent } from './cotxes/model/model.component';
import { EquipamentComponent } from './cotxes/equipament/equipament.component';

import { RegistComponent } from './cotxes/client/regist/regist.component';
import { UpdateComponent } from './cotxes/client/update/update.component';
import { DeleteComponent } from './cotxes/client/delete/delete.component';


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
  },
    {
    path: 'addMarca',
    component: AddMarcaComponent
  },
    {
    path: 'updateMarca',
    component: UpdateMarcaComponent
  },
    {
    path: 'listMarca',
<<<<<<< HEAD
    component: EquipamentComponent
  }, {
    path: 'update',
    component: UpdateComponent
  }, {
      path: 'delete',
      component: DeleteComponent
  }, {
      path: 'regist',
      component: RegistComponent
=======
    component: ListMarcaComponent
  },
    {
    path: 'deleteMarca',
    component: DeleteMarcaComponent
>>>>>>> 5f52f909119bc9337bac3604e639b9ce5917c9d3
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
