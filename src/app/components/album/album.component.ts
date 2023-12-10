import { Component, Input } from '@angular/core';
import type { Album } from '../../services/albums-store.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  @Input() album: Album | null = null;
  @Input() withLink: boolean = false;
}
