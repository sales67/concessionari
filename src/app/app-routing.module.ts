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

import { CrearEQComponent } from './cotxes/equipament/crear-eq/crear-eq.component';
import { ConsultarEQComponent } from './cotxes/equipament/consultar-eq/consultar-eq.component';
import { ModificarEQComponent } from './cotxes/equipament/modificar-eq/modificar-eq.component';
import { EsborrarEQComponent } from './cotxes/equipament/esborrar-eq/esborrar-eq.component';
//import {MarcaModule} from './cotxes/marca/marca.module';


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
    component: ListMarcaComponent,

  }, {
    path: 'update',
    component: UpdateComponent
  }, {
      path: 'delete',
      component: DeleteComponent
  }, {
      path: 'regist',
      component: RegistComponent

  },
    {
    path: 'deleteMarca',
    component: DeleteMarcaComponent
  },{
    path: 'crear-eq',
    component: CrearEQComponent
  },{
    path: 'consultar-eq',
    component: ConsultarEQComponent
  },{
    path: 'modificar-eq',
    component: ModificarEQComponent
  },{
    path: 'esborrar-eq',
    component: EsborrarEQComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
