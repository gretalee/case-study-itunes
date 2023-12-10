import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { SortCriteria } from '../../services/albums-store.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() searchTerm: string = '';
  @Input() sortedBy: SortCriteria = 'name';
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSortUpdate: EventEmitter<SortCriteria> =
    new EventEmitter<SortCriteria>();

  search() {
    this.searchClicked.emit(this.searchTerm);
  }

  setSortingTo(criteria: SortCriteria) {
    this.sortedBy = criteria;
    this.onSortUpdate.emit(this.sortedBy);
  }
}
