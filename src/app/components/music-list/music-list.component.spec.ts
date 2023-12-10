import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { MusicListComponent } from './music-list.component';
import type { Album } from '../../services/albums-store.service';
import mockedAlbums from './album-mock';

describe('MusicListComponent', () => {
  let component: MusicListComponent;
  let fixture: ComponentFixture<MusicListComponent>;

  const albums: Album[] = mockedAlbums;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicListComponent);
    component = fixture.componentInstance;
    component.albums = mockedAlbums;
    fixture.detectChanges();
  });

  it('should render all given albums', () => {
    expect(component).toBeTruthy();

    const { debugElement } = fixture;
    const resultArray = debugElement.queryAll(By.css('app-album'));
    expect(resultArray.length).toEqual(mockedAlbums.length);
  });
});
