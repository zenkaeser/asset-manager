import { Component } from '@angular/core';
import { AssetList } from './features/asset-list/asset-list';

@Component({
  selector: 'app-root',
  imports: [AssetList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
