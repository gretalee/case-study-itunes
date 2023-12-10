import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItunesService } from './itunes.service';
import type { SortCriteria } from './filter.service';

/**
 * This is a nice way to handle a store as a service.
 * Seen here: https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8
 */

export type Album = {
  amgArtistId: number;
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionType: string;
  collectionViewUrl: string;
  copyright: string;
  country: string;
  currency: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number;
  wrapperType: string;
};

@Injectable({
  providedIn: 'root',
})
export class AlbumsStoreService {
  // - Nobody outside the Store should have access to the BehaviorSubject
  // - Writing to state should be handled by Store methods
  // - One BehaviorSubject per store entity
  private readonly _albums = new BehaviorSubject<Album[]>([]);

  // Expose the observable$ part of the _albums subject (read only stream)
  readonly albums$ = this._albums.asObservable();

  searchTerm: string = 'Beatles';
  sortCriteria: SortCriteria = 'name';

  constructor(private itunesService: ItunesService) {}

  // we'll compose the albums$ observable with map operator to create a stream
  readonly sortedAlbums$ = this.albums$.pipe(
    map((albums: Album[]) => {
      if (this.sortCriteria === 'name') {
        return albums
          .slice()
          .sort((a, b) => a.collectionName.localeCompare(b.collectionName));
      } else if (this.sortCriteria === 'releaseDate') {
        return albums
          .slice()
          .sort(
            (a, b) =>
              new Date(a.releaseDate).getTime() -
              new Date(b.releaseDate).getTime()
          );
      } else if (this.sortCriteria === 'price') {
        return albums
          .slice()
          .sort((a, b) => a.collectionPrice - b.collectionPrice);
      }
      return albums;
    })
  );

  // the getter will return the last value emitted in _albums subject
  get albums(): Album[] {
    return this._albums.getValue();
  }

  // assigning a value to this.albums will push it onto the observable
  // and down to all of its subsribers
  set albums(val: Album[]) {
    this._albums.next(val);
  }

  updateSorting(sortBy: SortCriteria) {
    this.sortCriteria = sortBy;
    this._albums.next(this._albums.getValue());
  }

  searchFor(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.fetchAlbums();
  }

  async fetchAlbums() {
    this.itunesService.search(this.searchTerm).subscribe((data: any) => {
      this.albums = data.results as Album[];
    });
  }
}
