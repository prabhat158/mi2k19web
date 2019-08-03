import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuidelinesComponent } from './security-guidelines.component';

describe('SecurityGuidelinesComponent', () => {
  let component: SecurityGuidelinesComponent;
  let fixture: ComponentFixture<SecurityGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
