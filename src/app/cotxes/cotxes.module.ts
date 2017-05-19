import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { MarcaComponent } from './marca/marca.component';
import { EquipamentComponent } from './equipament/equipament.component';
import { ModelComponent } from './model/model.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddMarcaComponent } from './marca/addMarca/addMarca.component';
import { UpdateMarcaComponent } from './marca/updateMarca/updateMarca.component';
import { DeleteMarcaComponent } from './marca/deleteMarca/deleteMarca.component';
import { ListMarcaComponent } from './marca/listMarca/listMarca.component';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http} from '@angular/http';
import { RegistComponent } from './client/regist/regist.component';
import { UpdateComponent } from './client/update/update.component';
import { DeleteComponent } from './client/delete/delete.component';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule 
  ],
  declarations: [
      ClientComponent,
      MarcaComponent,
      EquipamentComponent,
      ModelComponent,
      RegistComponent,
      UpdateComponent,
      DeleteComponent,
      AddMarcaComponent,
      UpdateMarcaComponent,
      ListMarcaComponent,
      DeleteMarcaComponent
  ]
})
export class CotxesModule { }


