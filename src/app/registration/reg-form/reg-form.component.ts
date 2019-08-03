import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

  
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {


  CollegeList=[];
  dcl=[];

  constructor(
    private http: HttpClient
  ) { }

  form = new FormGroup({
    college: new FormControl(''),
  });


  ngOnInit() {
    this.http.get('https://api.moodi.org/cities/')
      .subscribe((data: any[]) => 
      this.CollegeList = data.map(function(item){
        return item.city_name;
      }))
  }

  is_substring(x, y){
    if(x.length==0){
      return true;
    }else if(y.length==0){
      return false;
    }
    else if(y.charAt(0)==x.charAt(0)){
      return this.is_substring(x.slice(1),y.slice(1));  
    }
    else{
      return this.is_substring(x,y.slice(1));
    }
  }

  DynamicCollegeList(inp: string): void{
    var result=[];
    for (let entry of this.CollegeList){
       if (this.is_substring(inp, entry)){
          result.push(entry);
        
       }
      
    }
    this.dcl= result;
    console.log(result);
    
  }

}
