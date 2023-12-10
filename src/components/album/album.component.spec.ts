import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { ItunesService } from '../../services/itunes.service';
import { FilterService } from '../../services/filter.service';
import { AlbumComponent } from './album.component';
import { OverviewComponent } from '../../app/overview/overview.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [],
      providers: [ItunesService, FilterService],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
