import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id?: string;
  title: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  private readonly apiBaseUrl = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    const params = {
      term: searchTerm,
      entity: 'album',
    };
    return this.http.get(this.apiBaseUrl, { params });
  }
}
