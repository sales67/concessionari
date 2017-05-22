import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.css']
})
export class NoticiesComponent implements OnInit {
    fullImagePath: string;
    constructor() {
        this.fullImagePath = '../../../../../assets/ferrari-422.jpg';
    }
    getImageUrl() {
       return this.fullImagePath = './ferrari-420.jpg';
    }

  ngOnInit() {
  }

}
