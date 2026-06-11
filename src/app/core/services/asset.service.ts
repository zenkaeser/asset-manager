import { computed, Injectable, signal } from '@angular/core';
import { Asset, AssetType } from '../models';
import { MOCK_ASSETS } from './mock-assets.data';

export type SortField = 'name' | 'dateAdded' | 'size';
export type SortDirection = 'asc' | 'desc';
export type ViewMode = 'grid' | 'list';

@Injectable({ providedIn: 'root' })
export class AssetService {
  readonly searchQuery = signal<string>('');
  readonly activeFilter = signal<AssetType | 'all'>('all');
  readonly sortField = signal<SortField>('dateAdded');
  readonly sortDirection = signal<SortDirection>('desc');
  readonly viewMode = signal<ViewMode>('grid');

  private readonly _assets = signal<Asset[]>(MOCK_ASSETS);

  readonly filteredAssets = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const filter = this.activeFilter();
    const field = this.sortField();
    const direction = this.sortDirection();

    let result = this._assets();

    // filter by type
    if (filter !== 'all') {
      result = result.filter((r) => r.assetType === filter);
    }

    // filter by search query
    if (query) {
      result = result.filter((a) => a.name.toLowerCase().includes(query));
    }

    // sort
    result = [...result].sort((a, b) => {
      let comparison = 0;

      if (field === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (field === 'size') {
        comparison = a.size - b.size;
      } else if (field === 'dateAdded') {
        comparison = a.dateAdded.getTime() - b.dateAdded.getTime();
      }

      return direction === 'asc' ? comparison : -comparison;
    });

    return result;
  });

  private readonly _selectedIds = signal<Set<string>>(new Set());
  readonly selectedIds = this._selectedIds.asReadonly();

  readonly selectedCount = computed(() => this._selectedIds().size);

  readonly isAllSelected = computed(
    () =>
      this.filteredAssets().length > 0 &&
      this.filteredAssets().every((a) => this._selectedIds().has(a.id)),
  );

  setSearch(query: string) {
    this.searchQuery.set(query);
  }

  setFilter(filter: AssetType | 'all') {
    this.activeFilter.set(filter);
  }

  setSort(field: SortField) {
    if (this.sortField() === field) {
      // toggle direction if same field is clicked again
      this.sortDirection.update((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortField.set(field);
      this.sortDirection.set('asc');
    }
  }
}
