import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameBoothComponent } from './edit-game-booth.component';

describe('EditGameBoothComponent', () => {
  let component: EditGameBoothComponent;
  let fixture: ComponentFixture<EditGameBoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGameBoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGameBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
