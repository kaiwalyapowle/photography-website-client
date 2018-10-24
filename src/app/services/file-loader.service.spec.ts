import { TestBed, inject } from '@angular/core/testing';

import { FileLoaderService } from './file-loader.service';

describe('FileLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileLoaderService]
    });
  });

  it('should be created', inject([FileLoaderService], (service: FileLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
