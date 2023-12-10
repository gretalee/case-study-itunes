import { Component, Input } from '@angular/core';
import type { Album } from '../../services/albums-store.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
})
export class MusicListComponent {
  @Input() albums: Album[] | null = null;
}
