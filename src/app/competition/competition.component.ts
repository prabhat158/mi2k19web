import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  clickedButton:string;

  constructor() { }

  ngOnInit() {
    this.clickedButton='';
  }

  onClick(button){
    this.clickedButton = button;
  }

}
