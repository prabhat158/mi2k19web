import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare var $:JQueryStatic;

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on("click mousemove",".box",function(e){ 
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - 60;
  var newposY = y - 60; 
  $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
  });
  }

}
// $(document).on("click mousemove",".box",function(e){ 
//   var x = e.clientX;
//   var y = e.clientY;
//   var newposX = x - 60;
//   var newposY = y - 60; $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
//   });