import { createContext, useContext, useEffect, useMemo, ReactNode } from 'react';
import type { EquipmentNode, MindmapContextType } from '@/types';
import { useSearch } from '@/hooks/useSearch';
import { useExpandedNodes } from '@/hooks/useExpandedNodes';
import { equipmentData } from '@/data/equipmentData';
import { scoringData } from '@/data/scoringData';

/**
 * Context untuk manage global state aplikasi mindmap
 * Menggunakan custom hooks untuk separation of concerns
 */
const MindmapContext = createContext<MindmapContextType | undefined>(undefined);

interface MindmapProviderProps {
  children: ReactNode;
}

export function MindmapProvider({ children }: Readonly<MindmapProviderProps>) {
  const masterData = useMemo<EquipmentNode>(() => ({
    id: 'archery-master-guide',
    name: 'ARCHERY RULES MASTER GUIDE',
    subtitle: 'Equipment & Scoring Reference',
    color: 'bg-slate-50 border-slate-300',
    children: [equipmentData, scoringData],
  }), [equipmentData, scoringData]);

  const { 
    searchState, 
    setSearchTerm, 
    clearSearch, 
    getMatchingIds 
  } = useSearch(masterData);
  
  const {
    expandedNodes,
    toggleNode,
    expandAll,
    collapseAll,
    setExpandedFromSearch
  } = useExpandedNodes(masterData);

  // Auto-expand nodes yang match search
  useEffect(() => {
    if (searchState.term) {
      const matchingIds = getMatchingIds(searchState.term);
      setExpandedFromSearch(matchingIds);
    }
  }, [searchState.term, getMatchingIds, setExpandedFromSearch]);

  // Memoize context value untuk prevent unnecessary re-renders
  const contextValue: MindmapContextType = useMemo(() => ({
    equipmentData: masterData,
    expandedNodes,
    searchState,
    toggleNode,
    expandAll,
    collapseAll,
    setSearchTerm,
    clearSearch
  }), [
    masterData,
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