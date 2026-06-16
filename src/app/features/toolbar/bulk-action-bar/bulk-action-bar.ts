import { Component, inject } from '@angular/core';
import { AssetService } from '../../../core/services/asset.service';

@Component({
  selector: 'app-bulk-action-bar',
  imports: [],
  templateUrl: './bulk-action-bar.html',
  styleUrl: './bulk-action-bar.scss',
})
export class BulkActionBar {
  protected readonly assetService = inject(AssetService);

  protected onDelete(): void {
    const count = this.assetService.selectedCount();
    if(confirm(`Delete ${count} asset${count > 1 ? 's' : ''}?`)) {
      this.assetService.bulkDelete();
    }
  }

  protected onDownload(): void {
    // Mock action - just clears selection for now
    console.log('Downloading', this.assetService.selectedCount(), 'assets');
    this.assetService.clearSelection();
  }
}
