import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
})
export class MusicListComponent {
  searchTerm: string = 'Beatles';
  sortCriteria: string = 'name';
  albums: any[] = [];

  constructor(private http: HttpClient) {}

  search2(searchTerm: string) {
    const url = 'https://itunes.apple.com/search';
    const params = {
      term: searchTerm,
      entity: 'album',
      sort: 'name',
    };

    this.http.get(url, { params }).subscribe((data: any) => {
      this.albums = data.results;
    });
  }

  setSortingTo(criteria: string) {
    this.sortCriteria = criteria;
  }

  search() {
    const url = 'https://itunes.apple.com/search';
    const params = new HttpParams()
      .set('term', this.searchTerm)
      .set('sort', this.sortCriteria)
      .set('entity', 'album');

    this.http.get(url, { params }).subscribe((data: any) => {
      this.albums = data.results;
    });
  }

  get sortedAlbums(): any[] {
    // Implement sorting logic based on the selected criteria
    if (this.sortCriteria === 'name') {
      return this.albums
        .slice()
        .sort((a, b) => a.collectionName.localeCompare(b.collectionName));
    } else if (this.sortCriteria === 'releaseDate') {
      return this.albums
        .slice()
        .sort(
          (a, b) =>
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
        );
    } else if (this.sortCriteria === 'price') {
      return this.albums
        .slice()
        .sort((a, b) => a.collectionPrice - b.collectionPrice);
    }

    // Default to returning unsorted albums
    return this.albums;
  }
}
