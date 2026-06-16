import { TestBed } from '@angular/core/testing';

import { AssetlistServicengcls } from './assetlist-servicengcls';

describe('AssetlistServicengcls', () => {
  let service: AssetlistServicengcls;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetlistServicengcls);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
