export type AssetType = 'image' | 'video' | '3D' | 'word' | 'excel' | 'powerPoint' | 'pdf' | 'text';

export interface Asset {
  id: string;
  name: string;
  assetType: AssetType;
  size: number;
  dateAdded: Date;
  tags: string[];
  thumbnailUrl?: string;
  previewUrl?: string;
}
