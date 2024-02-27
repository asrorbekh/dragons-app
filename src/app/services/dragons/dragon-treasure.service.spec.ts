import { TestBed } from '@angular/core/testing';

import { DragonTreasureService } from './dragon-treasure.service';

describe('DragonTreasureService', () => {
  let service: DragonTreasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonTreasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
