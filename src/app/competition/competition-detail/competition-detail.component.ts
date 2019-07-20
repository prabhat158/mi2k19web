import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../competition-data.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {

  clickedButton:string;

  competitions_categories: any[];
  current_competition_category: string;
  current_event: string;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: CompetitionDataService
  ) { }

  getCategories(){
    this.dataService.getCategories()
      .subscribe(
        data=> {
          this.competitions_categories = data['Competitions'];
        }
    );
  }  

  onClick(button){
    this.clickedButton = button;
  }

  ngOnInit() {
    
    this.clickedButton='desc';
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_competition_category = params.compiName,
        this.current_event = params.eventName
      }
    );
  }

}
