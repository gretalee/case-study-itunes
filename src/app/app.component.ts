import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'case-study-itunes';
  searchTerm: string = 'Beatles';
  sortCriteria: string = 'name';
  albums: any[] = [];

  constructor(private http: HttpClient) {}

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

    return this.albums;
  }
}
