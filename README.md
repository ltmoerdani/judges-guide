# 🏹 Archery Equipment Master Guide

> Interactive mindmap untuk World Archery Rules dan Judge Guidebook reference

## 📋 Deskripsi

Aplikasi **Archery Equipment Master Guide** adalah mindmap interaktif yang menyediakan referensi lengkap untuk equipment archery berdasarkan World Archery Rules dan Judge Guidebook. Aplikasi ini dirancang khusus untuk para judge, atlet, dan coach archery yang membutuhkan akses cepat ke peraturan equipment.

### ✨ Fitur Utama

- 🔍 **Live Search**: Pencarian real-time dengan fuzzy matching menggunakan Fuse.js
- 📱 **Responsive Design**: Optimized untuk desktop, tablet, dan mobile
- 🌙 **Dark Mode Support**: Otomatis mengikuti system preference
- ⚡ **Performance Optimized**: React.memo, useMemo, dan debounced search
- ♿ **Accessibility**: WCAG 2.1 compliant dengan keyboard navigation
- 🎨 **Modern UI**: Framer Motion animations dan Tailwind CSS
- 📚 **Complete Reference**: Berdasarkan official World Archery Rules Books 3, 4, 5

### 🎯 Target User

- **World Archery Judges**: Equipment inspection reference
- **Athletes**: Memahami peraturan equipment division masing-masing
- **Coaches**: Training reference untuk equipment compliance
- **Technical Officials**: Field procedures dan enforcement

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ dan npm/yarn
- Modern browser dengan ES2020 support

### Installation

```bash
# Clone repository
git clone <repository-url>
cd judges-guide

# Install dependencies
npm install

# Start development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Development Scripts

```bash
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run format       # Prettier format
```

## 📁 Struktur Project

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   ├── features/       # Feature-specific components
│   │   ├── SearchBar.tsx
│   │   ├── ControlPanel.tsx
│   │   ├── Node.tsx
│   │   └── MindmapContext.tsx
│   └── ArcheryMindmap.tsx  # Main component
├── hooks/              # Custom React hooks
│   ├── useSearch.ts
│   └── useExpandedNodes.ts
├── lib/               # Utilities dan helpers
│   └── utils.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── data/              # Data dan constants
│   └── equipmentData.ts
├── index.css          # Global styles
└── main.tsx           # Entry point
```

## 🔧 Architecture & Design Patterns

### Component Architecture

- **Atomic Design**: UI components (Button, Input, Badge) di `/ui`
- **Feature Components**: Business logic components di `/features`
- **Single Responsibility**: Setiap component punya satu tugas spesifik
- **Composition over Inheritance**: Menggunakan props dan children

### State Management

- **Context API**: Global state dengan `MindmapContext`
- **Custom Hooks**: Logic abstraction (`useSearch`, `useExpandedNodes`)
- **Local State**: Component-specific state dengan `useState`
- **Performance**: React.memo dan useMemo untuk optimizations

### Search Implementation

```typescript
// Fuzzy search dengan Fuse.js
const fuse = new Fuse(allNodes, {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'useCase', weight: 0.3 },
    { name: 'specs', weight: 0.2 },
    { name: 'ref', weight: 0.1 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true
});
```

### Styling Strategy

- **Tailwind CSS**: Utility-first approach
- **Design Tokens**: Consistent colors, spacing, typography
- **Dark Mode**: CSS custom properties dengan class-based strategy
- **Responsive**: Mobile-first breakpoints

## 📊 Data Structure

### Equipment Node Interface

```typescript
interface EquipmentNode {
  id: string;           // Unique identifier
  name: string;         // Equipment name
  subtitle?: string;    // Additional context
  ref?: string;         // Book reference (e.g., "Book 3 - 11.1.5")
  useCase?: string;     // Practical usage explanation
  specs?: string;       // Technical specifications
  color?: string;       // Tailwind color classes
  children?: EquipmentNode[];  // Nested items
}
```

### Search State

```typescript
interface SearchState {
  term: string;         // Current search term
  results: SearchResult[]; // Fuse.js results
  isLoading: boolean;   // Loading state
  matchCount: number;   // Total matches found
}
```

## 🎨 Design System

### Color Palette

- **Brand**: Blue scale (#0ea5e9 primary)
- **Success**: Green scale (#22c55e)
- **Warning**: Yellow scale (#eab308)
- **Danger**: Red scale (#ef4444)
- **Neutral**: Gray scale

### Typography

- **Font**: Inter (preloaded dari Google Fonts)
- **Scale**: text-xs (12px) → text-3xl (30px)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- **Base Unit**: 4px (0.25rem)
- **Scale**: 0.5, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32
- **Consistent Gaps**: gap-2, gap-4, gap-6

## 🔍 Search Features

### Advanced Search Capabilities

1. **Fuzzy Matching**: Typo-tolerant search
2. **Weighted Fields**: Name > UseCase > Specs > Reference
3. **Real-time Results**: Debounced untuk performance
4. **Auto-expand**: Parent nodes otomatis expand untuk hasil search
5. **Highlight**: Visual highlighting untuk matched text

### Search Tips untuk Users

```
✅ Coba search terms:
- "string" - untuk bowstring rules
- "sight" - untuk bow sight regulations
- "12.2cm" - untuk barebow ring test
- "compound" - untuk compound division
- "pressure point" - untuk arrow rest specs
- "60lbs" - untuk compound draw weight
```

## ♿ Accessibility Features

### WCAG 2.1 Compliance

- **Color Contrast**: Minimum 4.5:1 ratio
- **Keyboard Navigation**: Tab, Enter, Space support
- **Screen Readers**: ARIA labels dan semantic HTML
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects prefers-reduced-motion

### Keyboard Shortcuts

- `Tab` - Navigate between interactive elements
- `Enter/Space` - Toggle expand/collapse nodes
- `Escape` - Clear search (when search input focused)
- `/` - Focus search input (future enhancement)

## 📱 Mobile Optimization

### Responsive Breakpoints

- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet portrait)
- **lg**: 1024px (tablet landscape)
- **xl**: 1280px (desktop)
- **2xl**: 1536px (large desktop)

### Mobile-Specific Features

- Touch-friendly button sizes (min 44px)
- Optimized text sizes untuk mobile reading
- Gesture support untuk expand/collapse
- Reduced animations pada low-powered devices

## 🚀 Performance Optimizations

### React Optimizations

```typescript
// Component memoization
const Node = memo(NodeComponent);

// Expensive calculations
const searchResults = useMemo(() => {
  return fuse.search(searchTerm);
}, [searchTerm, fuse]);

// Event handler stability
const handleToggle = useCallback((id: string) => {
  // ...
}, [dependency]);
```

### Search Performance

- **Debounced Input**: 300ms delay untuk reduce API calls
- **Fuzzy Search**: Efficient algorithm dengan Fuse.js
- **Result Caching**: Memoized results untuk repeated searches
- **Lazy Rendering**: Hanya render visible nodes

### Bundle Optimization

- **Tree Shaking**: Hanya import yang digunakan
- **Code Splitting**: Dynamic imports untuk large components
- **Asset Optimization**: Compressed images dan fonts
- **Vite**: Fast build tool dengan HMR

## 🧪 Testing Strategy

### Testing Pyramid

```bash
# Unit Tests (Jest + React Testing Library)
npm run test

# Integration Tests
npm run test:integration

# E2E Tests (Cypress/Playwright)
npm run test:e2e

# Visual Regression Tests (Chromatic)
npm run test:visual
```

### Key Testing Areas

1. **Search Functionality**: Fuzzy matching, filtering
2. **Node Interactions**: Expand/collapse behavior
3. **Responsive Design**: Mobile/desktop layouts
4. **Accessibility**: Screen reader compatibility
5. **Performance**: Large dataset handling

## 🌍 Browser Support

### Supported Browsers

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅
- **Mobile Safari**: iOS 14+ ✅
- **Chrome Mobile**: Android 90+ ✅

### Polyfills

- ES2020 features via Vite
- CSS Grid dan Flexbox (native support)
- Web APIs: IntersectionObserver, ResizeObserver

## 📚 References

### World Archery Official Documents

- **Book 3**: Indoor dan Outdoor Target Archery Rules
- **Book 4**: Field dan 3D Archery Rules  
- **Book 5**: Run Archery dan Flight Archery Rules
- **Judge Guidebook**: Official procedures dan interpretations

### Technical References

- [World Archery Official Website](https://worldarchery.sport/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Fuse.js](https://fusejs.io/)

## 🤝 Contributing

### Development Workflow

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Coding Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced via pre-commit hooks
- **Prettier**: Code formatting
- **Conventional Commits**: untuk changelog generation

### Adding New Equipment Data

```typescript
// Dalam src/data/equipmentData.ts
{
  id: 'unique-id',
  name: 'EQUIPMENT NAME',
  ref: 'Book X - Article Y.Z',
  useCase: 'Practical usage explanation in Bahasa Indonesia',
  specs: 'Technical specifications dan measurements',
  color: 'bg-blue-50 border-blue-300', // Tailwind classes
  children: [ /* nested items */ ]
}
```

## 📄 License

**Educational Use License**

Project ini dibuat untuk keperluan edukasi dan referensi judge archery. Tidak untuk penggunaan komersial tanpa izin. Data equipment berdasarkan World Archery Rules yang tersedia untuk publik.

## 📞 Support

- **Issues**: [GitHub Issues](repository-url/issues)
- **Discussions**: [GitHub Discussions](repository-url/discussions)
- **Email**: [contact@archery-guide.com](mailto:contact@archery-guide.com)

---

**Made with ❤️ for the Archery Community**

*"Helping judges make accurate decisions, one equipment check at a time."*