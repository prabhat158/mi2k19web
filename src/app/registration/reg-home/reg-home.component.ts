import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-reg-home',
  templateUrl: './reg-home.component.html',
  styleUrls: ['./reg-home.component.css']
})
export class RegHomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public gID: number;
  public name: string;
  public imageURL: string;
  public email: string;
  private url: string = "http://api2.moodi.org/user";
  

  public auth2:any;
  public googleInit(){
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '511498944970-b2g59f8sj5h2c20vhkim5tkrpcn9sckc.apps.googleusercontent.com', 
        scope: 'profile' 
      });
    this.attachSignin(document.getElementById('button'));
    });
  }

  public attachSignin(element){
    this.auth2.attachClickHandler(element, {},
      (googleUser)=> {
        let profile=googleUser.getBasicProfile();
        this.gID=profile.getId();
        this.name= profile.getName();
        this.imageURL=profile.getImageUrl();
        this.email=profile.getEmail();
        this.onClick();
      });
  }

  onClick(){
    this.http.get(this.url+'/'+this.gID)
      .subscribe(
        data => {console.log(data),
          this.router.navigate(['profile'],{relativeTo: this.activatedRoute.parent})
        },
        error => this.router.navigate(['form'],{relativeTo: this.activatedRoute.parent})
      )
  }

  ngAfterViewInit(){
    this.googleInit();
  }

  ngOnInit() {
  }

}
