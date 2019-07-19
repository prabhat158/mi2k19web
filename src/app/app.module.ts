import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CompetitionListComponent } from './competition/competition-list/competition-list.component';
import { CompetitionMainComponent } from './competition/competition-main/competition-main.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionDetailComponent } from './competition/competition-detail/competition-detail.component';
import { CompDescRulesComponent } from './competition/competition-detail/comp-desc-rules/comp-desc-rules.component';
import { CompPrizesComponent } from './competition/competition-detail/comp-prizes/comp-prizes.component';
import { CompFaqComponent } from './competition/competition-detail/comp-faq/comp-faq.component';
import { CompRegComponent } from './competition/competition-detail/comp-reg/comp-reg.component';
import { CompPrevWinnerComponent } from './competition/competition-detail/comp-prev-winner/comp-prev-winner.component';



@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    ContactComponent,
    HomeComponent,
    AccommodationComponent,
    RegistrationComponent,
    EventsComponent,
    FaqsComponent,
    SponsorsComponent,
    CompetitionListComponent,
    CompetitionMainComponent,
    CompetitionDetailComponent,
    CompDescRulesComponent,
    CompPrizesComponent,
    CompFaqComponent,
    CompRegComponent,
    CompPrevWinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'accommodation',component:AccommodationComponent},
      {path:'registration',component:RegistrationComponent},
      {path:'events',component:EventsComponent},
      {path:'faqs',component:FaqsComponent},
      {path:'sponsors',component:SponsorsComponent},
      {path:'contact',component:ContactComponent},
      {
        path:'competition',
        component:CompetitionComponent,
        children: [
          {path: '', component: CompetitionMainComponent },
          {path: ':compiName', component: CompetitionListComponent},
          {
            path: ':compiName/:eventName',
            component: CompetitionDetailComponent,
            children: [
              {path: '', redirectTo: 'comp-desc', pathMatch:'full'},
              {path: 'comp-desc', component:CompDescRulesComponent},
              {path: 'comp-prizes', component:CompPrizesComponent},
              {path: 'comp-faq', component:CompFaqComponent},
              {path: 'comp-reg', component:CompRegComponent},
              {path: 'comp-prev-winner', component:CompPrevWinnerComponent},
            ]
          }
        ]
      },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
