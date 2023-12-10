import { Component } from '@angular/core';
import { AlbumsStoreService } from '../../services/albums-store.service';
import type { SortCriteria } from '../../services/albums-store.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
})
export class MusicListComponent {
  searchTerm: string = 'Beatles';
  sortCriteria: SortCriteria = 'name';
  albums: any[] = [];

  constructor(public albumsStore: AlbumsStoreService) {
    this.albumsStore.searchFor(this.searchTerm);
  }
}
