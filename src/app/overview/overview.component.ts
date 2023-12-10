import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { AlbumsStoreService } from '../../services/albums-store.service';
import type { SortCriteria } from '../../services/filter.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  searchTerm: string = '';
  sortCriteria: SortCriteria = '';
  albums: any[] = [];
  isInitialized: boolean = false;

  constructor(
    public albumsStore: AlbumsStoreService,
    public filterService: FilterService
  ) {
    this.filterService.filter$.subscribe((data) => {
      this.searchTerm = data.searchTerm;
      this.sortCriteria = data.sortBy;
      this.albumsStore.updateSorting(data.sortBy);

      if (!this.isInitialized || data.searchTerm !== this.searchTerm) {
        this.albumsStore.searchFor(data.searchTerm);
        this.isInitialized = true;
      }
    });
  }

  sort(by: SortCriteria) {
    this.filterService.setSorting(by);
    this.albumsStore.updateSorting(by);
  }

  search(by: string) {
    this.filterService.setSearchTerm(by);
    this.albumsStore.searchFor(by);
  }
}
