import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ItunesService } from './itunes.service';

describe('ItunesService', () => {
  let service: ItunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ItunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
