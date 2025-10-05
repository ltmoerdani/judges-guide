import { createContext, useContext, useEffect, useMemo, ReactNode } from 'react';
import type { MindmapContextType } from '@/types';
import { useSearch } from '@/hooks/useSearch';
import { useExpandedNodes } from '@/hooks/useExpandedNodes';
import { equipmentData } from '@/data/equipmentData';

/**
 * Context untuk manage global state aplikasi mindmap
 * Menggunakan custom hooks untuk separation of concerns
 */
const MindmapContext = createContext<MindmapContextType | undefined>(undefined);

interface MindmapProviderProps {
  children: ReactNode;
}

export function MindmapProvider({ children }: Readonly<MindmapProviderProps>) {
  const { 
    searchState, 
    setSearchTerm, 
    clearSearch, 
    getMatchingIds 
  } = useSearch(equipmentData);
  
  const {
    expandedNodes,
    toggleNode,
    expandAll,
    collapseAll,
    setExpandedFromSearch
  } = useExpandedNodes(equipmentData);

  // Auto-expand nodes yang match search
  useEffect(() => {
    if (searchState.term) {
      const matchingIds = getMatchingIds(searchState.term);
      setExpandedFromSearch(matchingIds);
    }
  }, [searchState.term, getMatchingIds, setExpandedFromSearch]);

  // Memoize context value untuk prevent unnecessary re-renders
  const contextValue: MindmapContextType = useMemo(() => ({
    equipmentData,
    expandedNodes,
    searchState,
    toggleNode,
    expandAll,
    collapseAll,
    setSearchTerm,
    clearSearch
  }), [
    expandedNodes,
    searchState,
    toggleNode,
    expandAll,
    collapseAll,
    setSearchTerm,
    clearSearch
  ]);

  return (
    <MindmapContext.Provider value={contextValue}>
      {children}
    </MindmapContext.Provider>
  );
}

/**
 * Custom hook untuk access mindmap context
 * Provides type-safe access ke state dan actions
 */
export function useMindmap(): MindmapContextType {
  const context = useContext(MindmapContext);
  
  if (context === undefined) {
    throw new Error('useMindmap must be used within a MindmapProvider');
  }
  
  return context;
}