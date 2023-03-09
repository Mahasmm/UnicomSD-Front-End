import { TestBed } from '@angular/core/testing';

import { GameBoothService } from './game-booth.service';

describe('GameBoothService', () => {
  let service: GameBoothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameBoothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
