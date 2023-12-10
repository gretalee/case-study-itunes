import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    };
    return this.http.get(`${this.apiBaseUrl}/search`, { params });
  }

  lookupAlbum(albumId: string) {
    const params = {
      id: albumId,
    };
    return this.http.get(`${this.apiBaseUrl}/lookup`, { params });
  }
}
