import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketListComponent } from './pocket-list.component';

describe('PocketListComponent', () => {
  let component: PocketListComponent;
  let fixture: ComponentFixture<PocketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
