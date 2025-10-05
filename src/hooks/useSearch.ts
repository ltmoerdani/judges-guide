import { useState, useMemo, useCallback } from 'react';
import Fuse, { FuseResult, FuseResultMatch } from 'fuse.js';
import type { EquipmentNode, SearchState, SearchResult, SearchMatch } from '@/types';
import { debounce, countMatches, getMatchingNodeIds } from '@/lib/utils';

/**
 * Helper: Flatten node tree ke array
 */
function flattenNodes(node: EquipmentNode): EquipmentNode[] {
  const nodes = [node];
  if (node.children) {
    node.children.forEach(child => {
      nodes.push(...flattenNodes(child));
    });
  }
  return nodes;
}

/**
 * Helper: Convert Fuse.js match ke SearchMatch
 */
function convertFuseMatch(match: FuseResultMatch): SearchMatch {
  return {
    field: match.key as keyof EquipmentNode,
    value: match.value || '',
    indices: match.indices as readonly (readonly [number, number])[],
  };
}

/**
 * Helper: Convert Fuse.js result ke SearchResult
 */
function convertFuseResult(result: FuseResult<EquipmentNode>): SearchResult {
  return {
    nodeId: result.item.id,
    score: result.score || 0,
    matches: result.matches?.map(convertFuseMatch) || [],
  };
}

/**
 * Custom hook untuk advanced search functionality
 * Menggunakan Fuse.js untuk fuzzy search dengan performance optimization
 */
export function useSearch(equipmentData: EquipmentNode) {
  const [searchState, setSearchState] = useState<SearchState>({
    term: '',
    results: [],
    isLoading: false,
    matchCount: 0,
  });

  // Setup Fuse.js dengan konfigurasi optimal untuk archery data
  const fuse = useMemo(() => {
    const allNodes = flattenNodes(equipmentData);
    
    return new Fuse(allNodes, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'useCase', weight: 0.3 },
        { name: 'specs', weight: 0.2 },
        { name: 'ref', weight: 0.1 },
      ],
      threshold: 0.3, // Fuzzy matching threshold
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      shouldSort: true,
    });
  }, [equipmentData]);

  // Perform search dan update state
  const performSearch = useCallback((term: string) => {
    if (!term.trim()) {
      setSearchState(prev => ({
        ...prev,
        results: [],
        matchCount: 0,
        isLoading: false,
      }));
      return;
    }

    const fuseResults = fuse.search(term);
    const searchResults = fuseResults.map(convertFuseResult);
    const matchCount = countMatches(equipmentData, term);

    setSearchState(prev => ({
      ...prev,
      results: searchResults,
      matchCount,
      isLoading: false,
    }));
  }, [fuse, equipmentData]);

  // Debounced search function
  const debouncedSearch = useMemo(
    () => debounce(performSearch, 300),
    [performSearch]
  );

  const setSearchTerm = useCallback((term: string) => {
    setSearchState(prev => ({
      ...prev,
      term,
      isLoading: term.trim().length >= 2,
    }));
    
    debouncedSearch(term);
  }, [debouncedSearch]);

  const clearSearch = useCallback(() => {
    setSearchState({
      term: '',
      results: [],
      isLoading: false,
      matchCount: 0,
    });
  }, []);

  // Get matching node IDs for expand state management
  const getMatchingIds = useCallback((term: string) => {
    return getMatchingNodeIds(equipmentData, term);
  }, [equipmentData]);

  return {
    searchState,
    setSearchTerm,
    clearSearch,
    getMatchingIds,
  };
}