import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistComponent } from './client/regist/regist.component';
import { UpdateComponent } from './client/update/update.component';
import { DeleteComponent } from './client/delete/delete.component';

const routes: Routes = [
    {
        path: 'regist',
        component: RegistComponent,
        children: []
    }, {
        path: 'update',
        component: UpdateComponent
    }, {
        path: 'delete',
        component: DeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CotxeRoutingModule { }