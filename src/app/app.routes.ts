import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'details/:id', component: DetailViewComponent },
];
