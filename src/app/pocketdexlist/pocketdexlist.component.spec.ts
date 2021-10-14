import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketdexlistComponent } from './pocketdexlist.component';

describe('PocketdexlistComponent', () => {
  let component: PocketdexlistComponent;
  let fixture: ComponentFixture<PocketdexlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketdexlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketdexlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
