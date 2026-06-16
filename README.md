# Asset Manager

A portfolio project showcasing modern **Angular 21** patterns — signals-first, zoneless, standalone components throughout.

🔗 **[Live Demo](https://zenkaeser.github.io/asset-manager/)**

---

## Tech Stack

| | |
|---|---|
| Framework | Angular 21 (standalone, zoneless) |
| Language | TypeScript (strict mode) |
| Styling | SCSS (no UI library) |
| State | Angular Signals |
| Deployment | GitHub Pages |

---

## Features

- **Asset grid and list view** — toggle between layouts
- **Signal-based search** — filters assets in real time as you type
- **File type filtering** — images, videos, documents, 3D models
- **Multi-column sort** — by name, date added, or file size with direction toggle
- **Multi-select** — checkbox selection with bulk delete and download
- **Bulk action bar** — appears contextually when assets are selected
- **Asset detail panel** — slides in from the right with full metadata
- **Keyboard support** — Escape closes the detail panel
- **Click outside to close** — standard UX pattern on the detail overlay

---

## Angular 21 Patterns Showcased

- `provideExperimentalZonelessChangeDetection()` — no Zone.js
- Signals for all state — `signal()`, `computed()`, `.asReadonly()`
- Standalone components only — zero NgModules
- Modern control flow — `@if`, `@for`, `@switch`, `@empty`
- Signal-based form inputs — no `FormControl`, no `ngModel`
- `inject()` function — no constructor injection
- `host` property for DOM events — no `@HostListener`
- Immutable signal updates — `Set<string>` pattern for multi-select

---

## Project Structure

src/
app/
core/
models/       # Asset interface, AssetType union
services/     # AssetService — all state lives here
features/
asset-list/   # Main grid/list view
asset-detail/ # Slide-in detail panel
toolbar/      # Search, filter, sort controls

# bulk-action-bar/

shared/
components/   # Reusable UI

---

## Running Locally

```bash
git clone https://github.com/zenkaeser/asset-manager
cd asset-manager
npm install
ng serve
```

Open `http://localhost:4200`

---

## Screenshots

<!-- Add screenshots after deployment -->