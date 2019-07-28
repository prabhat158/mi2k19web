import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegHomeComponent } from './reg-home.component';

describe('RegHomeComponent', () => {
  let component: RegHomeComponent;
  let fixture: ComponentFixture<RegHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
