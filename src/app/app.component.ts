import { Component } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(filterServie: FilterService) {}
}
