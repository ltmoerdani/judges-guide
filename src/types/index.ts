/**
 * Type definitions untuk aplikasi Archery Rules Mindmap
 * Semua interface dan tipe data yang digunakan di aplikasi
 */

export interface EquipmentNode {
  id: string;
  name: string;
  subtitle?: string;
  ref?: string;
  useCase?: string;
  specs?: string;
  color?: string;
  children?: EquipmentNode[];
}

export interface SearchState {
  term: string;
  results: SearchResult[];
  isLoading: boolean;
  matchCount: number;
}

export interface SearchResult {
  nodeId: string;
  score: number;
  matches: SearchMatch[];
}

export interface SearchMatch {
  field: keyof EquipmentNode;
  value: string;
  indices: readonly (readonly [number, number])[];
}

export interface ExpandedNodes {
  [nodeId: string]: boolean;
}

export interface MindmapContextType {
  equipmentData: EquipmentNode;
  expandedNodes: ExpandedNodes;
  searchState: SearchState;
  toggleNode: (id: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
}

export interface NodeProps {
  node: EquipmentNode;
  level?: number;
  isSearchHighlighted?: boolean;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  matchCount: number;
  isLoading?: boolean;
}

export interface ControlPanelProps {
  onExpandAll: () => void;
  onCollapseAll: () => void;
  onClearSearch: () => void;
  matchCount: number;
  hasSearchTerm: boolean;
}

// Utility types
export type ColorTheme = 
  | 'blue'
  | 'green' 
  | 'amber'
  | 'purple'
  | 'red'
  | 'orange'
  | 'gray'
  | 'indigo';

export interface ThemeColors {
  [key: string]: string;
}

// Event handlers
export type NodeToggleHandler = (id: string) => void;
export type SearchHandler = (term: string) => void;
export type ClearHandler = () => void;

// Constants
export const SEARCH_CONFIG = {
  threshold: 0.3, // Fuse.js threshold untuk fuzzy matching
  minLength: 2, // Minimum panjang search term
  debounceMs: 300, // Debounce delay untuk search
} as const;

export const ANIMATION_CONFIG = {
  duration: 300,
  easing: 'ease-out',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;