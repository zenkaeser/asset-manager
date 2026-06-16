import { Component, computed, inject } from '@angular/core';
import { AssetService } from '../../core/services/asset.service';
import { DatePipe } from '@angular/common';
import { formatBytes } from '../../core/utils/format-bytes';

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

    return formatBytes(asset.size);
  });

  onEscape(): void {
    this.assetService.closeDetail();
  }
}
