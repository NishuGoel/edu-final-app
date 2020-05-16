import { TestBed } from '@angular/core/testing';

import { FadedFullScreenLoaderService } from './faded-full-screen-loader.service';

describe('FadedFullScreenLoaderService', () => {
  let service: FadedFullScreenLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadedFullScreenLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
