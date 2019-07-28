import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProfileComponent } from './reg-profile.component';

describe('RegProfileComponent', () => {
  let component: RegProfileComponent;
  let fixture: ComponentFixture<RegProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
