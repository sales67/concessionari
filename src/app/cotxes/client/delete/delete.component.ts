import { Component, OnInit } from '@angular/core';
//import { StateService } from '../common/state.service';
import { DeleteService } from './delete.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { Client } from '../client';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [DeleteService]
})
export class DeleteComponent implements OnInit {

    idD; deleteC;
    constructor(private deleteService: DeleteService) { }

  deleteButton() {

      this.deleteService.deleteClient(this.idD)
          .subscribe(
          data => { this.deleteC = data },
          () => console.log('Has eliminat el client'));
  }

  ngOnInit() {
  }

}
