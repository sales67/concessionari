import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { addMarcaComponent } from './addMarca/addMarca.component';
import { updateMarcaComponent } from './updateMarca/updateMarca.component';
import { listMarcaComponent } from './listMarca/listMarca.component';
import { deleteMarcaComponent } from './deleteMarca/deleteMarca.component';

const routes: Routes = [
  {
    path: 'addMarca',
    component: addMarcaComponent,
    children: []
  }, {
    path: 'updateMarca',
    component: updateMarcaComponent
  }, {
    path: 'listMarca',
    component: listMarcaComponent,
  }, {
    path: 'deleteMarca',
    component: deleteMarcaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }