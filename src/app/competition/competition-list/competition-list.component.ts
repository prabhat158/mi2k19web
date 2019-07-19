import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions_categories: any[];
  current_competition_category: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.http.get('https://api2.moodi.org/events/')
    .subscribe(
      data=> {
        this.competitions_categories = data['Competitions'];
      }
    );
    this.route.params.subscribe(
      params => {
        this.current_competition_category = params.compiName;
      }
    );
    }

}
