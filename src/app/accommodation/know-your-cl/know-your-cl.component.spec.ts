import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourClComponent } from './know-your-cl.component';

describe('KnowYourClComponent', () => {
  let component: KnowYourClComponent;
  let fixture: ComponentFixture<KnowYourClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowYourClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
