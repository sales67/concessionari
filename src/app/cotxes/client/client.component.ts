import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca/marca.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { Client } from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent {
    title = 'COTXES APP';
}


