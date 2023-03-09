import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameBoothComponent } from './add-game-booth.component';

describe('AddGameBoothComponent', () => {
  let component: AddGameBoothComponent;
  let fixture: ComponentFixture<AddGameBoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGameBoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGameBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
