import { Component, inject } from '@angular/core';
import { AssetType } from '../../core/models';
import { AssetService, SortField } from '../../core/services/asset.service';

const FILTER_OPTIONS: { label: string; value: AssetType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Images', value: 'image' },
  { label: 'Videos', value: 'video' },
  { label: 'Word', value: 'word' },
  { label: 'Excel', value: 'excel' },
  { label: 'PowerPoint', value: 'powerPoint' },
  { label: 'Text', value: 'text' },
  { label: 'PDF', value: 'pdf' },
  { label: '3D', value: '3D' },
];

const SORT_OPTIONS: { label: string; value: SortField }[] = [
  { label: 'Name', value: 'name' },
  { label: 'Date', value: 'dateAdded' },
  { label: 'Size', value: 'size' },
];

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  standalone: true,
})
export class Toolbar {
  protected readonly assetService = inject(AssetService);
  protected readonly filterOptions = FILTER_OPTIONS;
  protected readonly sortOptions = SORT_OPTIONS;

  protected onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.assetService.setSearch(value);
  }
}
