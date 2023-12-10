import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SortCriteria = '' | 'name' | 'releaseDate' | 'price';

export type Filter = {
  searchTerm: string;
  sortBy: SortCriteria;
};

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private readonly _filter = new BehaviorSubject<Filter>({
    searchTerm: 'Beatles',
    sortBy: 'name',
  });

  readonly filter$ = this._filter.asObservable();

  constructor() {
    const storageItem = localStorage.getItem('filter');
    if (storageItem) {
      const storedFilter = JSON.parse(storageItem);
      this._filter.next(storedFilter);
    }
  }

  get filter(): Filter {
    return this._filter.getValue();
  }

  set filter(val: Filter) {
    this._filter.next(val);
  }

  setSearchTerm(searchTerm: string) {
    const newVal = {
      searchTerm: searchTerm,
      sortBy: this._filter.getValue().sortBy,
    };
    this._filter.next(newVal);
    localStorage.setItem('filter', JSON.stringify(newVal));
  }

  setSorting(sortBy: SortCriteria) {
    const newVal = {
      searchTerm: this._filter.getValue().searchTerm,
      sortBy: sortBy,
    };
    this._filter.next(newVal);
    localStorage.setItem('filter', JSON.stringify(newVal));
  }
}
