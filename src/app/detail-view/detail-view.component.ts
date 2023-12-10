import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItunesService } from '../services/itunes.service';
import type { Album } from '../services/albums-store.service';

/**
 * TODO: After a reload the back-to-overview-link
 * returns to the inital list, not the last search.
 *
 * So, this lookup should get the value from the store and
 * the filter should be saved in localstorage.
 */

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent implements OnInit {
  album: Album | null = null;

  constructor(
    private route: ActivatedRoute,
    private itunesService: ItunesService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumId = routeParams.get('id');
    if (albumId) {
      this.itunesService.lookupAlbum(albumId).subscribe((data: any) => {
        const result: Album[] = data.results as Album[];
        this.album = result?.[0];
      });
    }
  }
}
