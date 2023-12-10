import { TestBed } from '@angular/core/testing';

import { AlbumsStoreService } from './albums-store.service';

describe('AlbumsStoreService', () => {
  let service: AlbumsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
