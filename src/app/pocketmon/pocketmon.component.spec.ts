import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketmonComponent } from './pocketmon.component';

describe('PocketmonComponent', () => {
  let component: PocketmonComponent;
  let fixture: ComponentFixture<PocketmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketmonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
