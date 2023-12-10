import { Component } from '@angular/core';
import { AlbumsStoreService } from '../services/albums-store.service';
import type { SortCriteria } from '../services/albums-store.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  searchTerm: string = 'Beatles';
  sortCriteria: SortCriteria = 'name';
  albums: any[] = [];

  constructor(public albumsStore: AlbumsStoreService) {
    this.albumsStore.searchFor(this.searchTerm);
  }
}
