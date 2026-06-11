import { AssetDetail } from '../asset-detail/asset-detail';
import { AssetService } from '../../core/services/asset.service';
import { Component, inject } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-asset-list',
  imports: [AssetDetail, Toolbar, DecimalPipe, DatePipe],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss',
  standalone: true,
})
export class AssetList {
  protected readonly assetService = inject(AssetService);
}
