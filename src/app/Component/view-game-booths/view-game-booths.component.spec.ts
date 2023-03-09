import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGameBoothsComponent } from './view-game-booths.component';

describe('ViewGameBoothsComponent', () => {
  let component: ViewGameBoothsComponent;
  let fixture: ComponentFixture<ViewGameBoothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGameBoothsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGameBoothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
