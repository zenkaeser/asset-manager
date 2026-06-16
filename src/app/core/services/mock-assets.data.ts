import { Asset } from '../models';

export const MOCK_ASSETS: Asset[] = [
  // --- IMAGE (3) ---
  {
    id: 'ast-001',
    name: 'hero-background.jpeg',
    assetType: 'image',
    size: 2451200,
    dateAdded: new Date('2026-01-15T08:30:00Z'),
    tags: ['marketing', 'homepage', 'vibrant'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&auto=format&fit=crop&q=60',
    previewUrl:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'ast-002',
    name: 'product-shot-01.png',
    assetType: 'image',
    size: 5120000,
    dateAdded: new Date('2026-02-02T11:00:00Z'),
    tags: ['e-commerce', 'product', 'isolated'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&auto=format&fit=crop&q=60',
    previewUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'ast-003',
    name: 'blog-thumbnail-optimized.webp',
    assetType: 'image',
    size: 185000,
    dateAdded: new Date('2026-03-01T09:15:00Z'),
    tags: ['blog', 'content', 'compressed'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=150&auto=format&fit=crop&q=60',
  },

  // --- VIDEO (3) ---
  {
    id: 'ast-004',
    name: 'product-explainer-final.mp4',
    assetType: 'video',
    size: 48200000,
    dateAdded: new Date('2026-03-10T10:00:00Z'),
    tags: ['marketing', 'video', 'tutorial'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=150&auto=format&fit=crop&q=60',
    previewUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'ast-005',
    name: 'raw-interview-footage.mov',
    assetType: 'video',
    size: 1240000000,
    dateAdded: new Date('2026-03-22T17:30:00Z'),
    tags: ['raw', 'interview', 'internal'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'ast-006',
    name: 'hero-background-loop.webm',
    assetType: 'video',
    size: 8400000,
    dateAdded: new Date('2026-04-05T13:20:00Z'),
    tags: ['ui', 'video', 'loop'],
    previewUrl: 'https://www.w3schools.com/html/movie.webm',
  },

  // --- 3D (3) ---
  {
    id: 'ast-007',
    name: 'architectural-chair-mesh.obj',
    assetType: '3D',
    size: 85000000,
    dateAdded: new Date('2026-05-28T11:30:00Z'),
    tags: ['3d', 'furniture', 'raw-mesh'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'ast-008',
    name: 'scooter-model-textured.gltf',
    assetType: '3D',
    size: 23400000,
    dateAdded: new Date('2026-06-03T14:10:00Z'),
    tags: ['3d', 'webgl', 'product'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'ast-009',
    name: 'sneaker-ar-view.usdz',
    assetType: '3D',
    size: 12800000,
    dateAdded: new Date('2026-06-09T10:05:00Z'),
    tags: ['3d', 'ar', 'ios'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=60',
  },

  // --- WORD (2) ---
  {
    id: 'ast-010',
    name: 'employment-contract-template.docx',
    assetType: 'word',
    size: 245000,
    dateAdded: new Date('2026-04-20T15:40:00Z'),
    tags: ['hr', 'legal', 'template'],
  },
  {
    id: 'ast-011',
    name: 'project-proposal-v2.docx',
    assetType: 'word',
    size: 512000,
    dateAdded: new Date('2026-04-22T10:30:00Z'),
    tags: ['sales', 'proposal', 'draft'],
  },

  // --- EXCEL (3) ---
  {
    id: 'ast-012',
    name: 'q1-financial-report.xlsx',
    assetType: 'excel',
    size: 1250000,
    dateAdded: new Date('2026-05-02T10:15:00Z'),
    tags: ['finance', 'q1', 'report'],
  },
  {
    id: 'ast-013',
    name: 'user-feedback-export.csv',
    assetType: 'excel',
    size: 450000,
    dateAdded: new Date('2026-05-18T16:50:00Z'),
    tags: ['data', 'feedback', 'raw'],
  },
  {
    id: 'ast-014',
    name: 'inventory-tracking-sheet.xlsx',
    assetType: 'excel',
    size: 3100000,
    dateAdded: new Date('2026-05-20T09:00:00Z'),
    tags: ['operations', 'inventory'],
  },

  // --- POWERPOINT (2) ---
  {
    id: 'ast-015',
    name: 'investor-pitch-deck.pptx',
    assetType: 'powerPoint',
    size: 32400000,
    dateAdded: new Date('2026-05-10T14:00:00Z'),
    tags: ['funding', 'pitch', 'presentation'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'ast-016',
    name: 'q3-marketing-strategy.pptx',
    assetType: 'powerPoint',
    size: 18400000,
    dateAdded: new Date('2026-05-12T11:20:00Z'),
    tags: ['marketing', 'strategy', 'presentation'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&auto=format&fit=crop&q=60',
  },

  // --- PDF (2) ---
  {
    id: 'ast-017',
    name: 'brand-guidelines-2026.pdf',
    assetType: 'pdf',
    size: 15400000,
    dateAdded: new Date('2026-04-15T09:00:00Z'),
    tags: ['branding', 'legal', 'guidelines'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'ast-018',
    name: 'product-spec-sheet.pdf',
    assetType: 'pdf',
    size: 2100000,
    dateAdded: new Date('2026-04-18T14:15:00Z'),
    tags: ['engineering', 'specs'],
  },

  // --- TEXT (2) ---
  {
    id: 'ast-019',
    name: 'readme-instructions.txt',
    assetType: 'text',
    size: 1200,
    dateAdded: new Date('2026-05-22T08:00:00Z'),
    tags: ['documentation', 'internal'],
  },
  {
    id: 'ast-020',
    name: 'configuration-env-sample.txt',
    assetType: 'text',
    size: 850,
    dateAdded: new Date('2026-05-25T13:40:00Z'),
    tags: ['devops', 'config'],
  },
];
