import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLoginComponent } from './homepage-login.component';

describe('HomepageLoginComponent', () => {
  let component: HomepageLoginComponent;
  let fixture: ComponentFixture<HomepageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
