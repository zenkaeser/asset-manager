import { Component, input, output } from '@angular/core';
import { Asset } from '../../core/models';

@Component({
  selector: 'app-asset-detail',
  imports: [],
  templateUrl: './asset-detail.html',
  styleUrl: './asset-detail.scss',
})
export class AssetDetail {
  public asset = input<Asset>();
  public emitSomethingToTheParent = output<string>();
}
