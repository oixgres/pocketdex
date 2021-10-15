import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdexComponent } from './navdex.component';

describe('NavdexComponent', () => {
  let component: NavdexComponent;
  let fixture: ComponentFixture<NavdexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavdexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
