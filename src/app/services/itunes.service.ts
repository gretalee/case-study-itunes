import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: add loading state !!!

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  private readonly apiBaseUrl = 'https://itunes.apple.com';

  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    const params = {
      term: searchTerm,
      entity: 'album',
      limit: 200,
    };
    return this.http.get(`${this.apiBaseUrl}/search`, { params });
  }

  lookupAlbum(albumId: string) {
    // Param `entity=song` causes CORS error ?!
    // Params `upc=1234&entity=song` should return the tracks, but the result is empty.
    // Probably it's not the upc.
    const params = {
      id: albumId,
    };

    return this.http.get(`${this.apiBaseUrl}/lookup`, { params });
  }
}
