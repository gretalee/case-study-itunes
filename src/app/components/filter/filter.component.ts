import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() searchTerm: string = '';
  @Input() sortedBy: string = '';
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSortUpdate: EventEmitter<string> = new EventEmitter<string>();

  search() {
    this.searchClicked.emit(this.searchTerm);
  }

  setSortingTo(criteria: string) {
    this.sortedBy = criteria;
    this.onSortUpdate.emit(this.sortedBy);
  }
}
