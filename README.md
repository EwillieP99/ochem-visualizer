# Protein Detective

Explore 3D protein structures and disease mutation hotspots, powered by AlphaFold + UniProt.

## Stack

- **Next.js 15** (App Router)
- **NGL.js** — 3D protein structure viewer (loaded via CDN)
- **AlphaFold EBI API** — structure predictions + pLDDT confidence scores
- **UniProt REST API** — protein search, gene/disease lookup
- **EBI Proteins API** — clinical variant data

No API keys required. All external APIs are free and public.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── api/
│   │   ├── search/route.ts       # Proxies UniProt search
│   │   ├── structure/route.ts    # Proxies AlphaFold prediction fetch
│   │   └── variants/route.ts     # Proxies EBI variant data
│   ├── protein/page.tsx          # 3D viewer + mutation panel
│   ├── page.tsx                  # Search home page
│   ├── layout.tsx                # Root layout, loads NGL.js
│   └── globals.css               # Design tokens + base styles
├── components/
│   ├── search/
│   │   ├── SearchBar.tsx         # Input with auto mode detection
│   │   ├── FeaturedChips.tsx     # Curated quick-access proteins
│   │   └── SearchResults.tsx     # Result list from search
│   └── viewer/
│       ├── ProteinViewer.tsx     # NGL.js 3D viewer wrapper
│       └── MutationPanel.tsx     # Variant list + lollipop track
├── hooks/
│   ├── useProteinSearch.ts       # Search state + API call
│   └── useProteinDetails.ts      # Parallel structure + variant fetch
├── lib/
│   ├── detect-search-mode.ts     # Gene / accession / disease classifier
│   ├── uniprot.ts                # UniProt API helpers
│   ├── alphafold.ts              # AlphaFold API helper
│   └── featured-proteins.ts     # Curated featured protein list
└── types/index.ts                # Shared TypeScript types
```

## Search modes

The search bar auto-detects input type:

| Input | Example | Mode |
|-------|---------|------|
| All-caps 2–8 chars | `BRCA1`, `TP53` | Gene symbol |
| 6-char alphanumeric | `P38398` | UniProt accession |
| Everything else | `cystic fibrosis` | Disease/keyword |

## Color modes in viewer

- **Confidence** — pLDDT score per residue (blue = high, red = low)
- **Mutations** — pathogenic variants shown as red spheres on a gray backbone
- **Structure** — secondary structure coloring (helix / sheet / loop)

## Extending this

Ideas for next steps:
- Add a residue click handler in NGL.js to show per-residue detail on click
- Cache AlphaFold `.pdb` files in `/public` or Supabase storage to reduce load time
- Pull functional domain annotations from UniProt to overlay on the structure
- Add a comparison mode to view two proteins side-by-side
- Integrate ClinVar for additional variant clinical significance data
