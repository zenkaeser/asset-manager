import { AssetService } from '../../core/services/asset.service';
import { Component, inject } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { DatePipe, DecimalPipe } from '@angular/common';
import { BulkActionBar } from '../toolbar/bulk-action-bar/bulk-action-bar';
import { AssetDetail } from '../asset-detail/asset-detail';
import { formatBytes } from '../../core/utils/format-bytes';

@Component({
  selector: 'app-asset-list',
  imports: [Toolbar, DatePipe, BulkActionBar, AssetDetail],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss',
  standalone: true,
})
export class AssetList {
  protected readonly assetService = inject(AssetService);
  protected readonly formatBytes = formatBytes;
}
