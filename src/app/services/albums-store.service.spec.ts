import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsStoreService } from './albums-store.service';

describe('AlbumsStoreService', () => {
  let service: AlbumsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AlbumsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
