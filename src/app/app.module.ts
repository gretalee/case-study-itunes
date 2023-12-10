import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { AlbumComponent } from './components/album/album.component';
import { ItunesService } from './services/itunes.service';
import { FilterService } from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailViewComponent,
    MusicListComponent,
    FilterComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ItunesService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
