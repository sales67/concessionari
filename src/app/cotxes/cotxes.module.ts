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
import { CrearEQComponent } from './equipament/crear-eq/crear-eq.component';
import { ConsultarEQComponent } from './equipament/consultar-eq/consultar-eq.component';
import { ModificarEQComponent } from './equipament/modificar-eq/modificar-eq.component';
import { EsborrarEQComponent } from './equipament/esborrar-eq/esborrar-eq.component';
<<<<<<< HEAD
import {AppRoutingModule} from '../app-routing.module';
import { InformacioComponent } from './informacio/informacio.component';

=======
import {AppRoutingModule} from '../app-routing.module';
import { ListMarcaIdComponent } from './marca/listMarca/listMarcaId/listMarcaId.component';
import { ListMarcaNameComponent } from './marca/listMarca/listMarcaName/listMarcaName.component';
>>>>>>> c1826732866c39749e0297908438947d9b5172ac

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      ClientComponent,
      MarcaComponent,
      EquipamentComponent,
      ModelComponent,


      RegistComponent,
      UpdateComponent,
      DeleteComponent,


      RegistComponent,
      UpdateComponent,
      DeleteComponent,

      AddMarcaComponent,
      UpdateMarcaComponent,
      ListMarcaComponent,
      ListMarcaIdComponent,
      ListMarcaNameComponent,      


      DeleteMarcaComponent,
      CrearEQComponent,
      ConsultarEQComponent,
      ModificarEQComponent,
      EsborrarEQComponent,
      InformacioComponent

  ]
})
export class CotxesModule { }


