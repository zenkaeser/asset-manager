import { Component, computed, inject } from '@angular/core';
import { AssetService } from '../../core/services/asset.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-asset-detail',
  imports: [DatePipe],
  templateUrl: './asset-detail.html',
  styleUrl: './asset-detail.scss',
  standalone: true,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class AssetDetail {
  protected readonly assetService = inject(AssetService);

  protected readonly formattedSize = computed(() => {
    const asset = this.assetService.selectedAsset();

    if (!asset) {
      return '';
    }

    return this.formatBytes(asset.size);
  });

  private formatBytes(bytes: number): string {
    if (bytes === 0) {
      return '0 B';
    }

    const units = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
  }

  onEscape(): void {
    this.assetService.closeDetail();
  }
}
