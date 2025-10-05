import { useState, useCallback, useMemo } from 'react';
import type { ExpandedNodes, EquipmentNode } from '@/types';
import { getAllNodeIds } from '@/lib/utils';

/**
 * Custom hook untuk manage expand/collapse state dari nodes
 * Mengoptimalkan performance dengan memoization dan efficient updates
 */
export function useExpandedNodes(equipmentData: EquipmentNode) {
  const [expandedNodes, setExpandedNodes] = useState<ExpandedNodes>(() => {
    const initial: ExpandedNodes = {
      [equipmentData.id]: true,
    };

    if (equipmentData.children && equipmentData.children.length > 0) {
      initial[equipmentData.children[0].id] = true;
    }

    return initial;
  });

  // Memoize semua node IDs untuk performance
  const allNodeIds = useMemo(() => {
    return getAllNodeIds(equipmentData);
  }, [equipmentData]);

  /**
   * Toggle single node expand/collapse
   */
  const toggleNode = useCallback((id: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  /**
   * Expand semua nodes
   */
  const expandAll = useCallback(() => {
    const allExpanded: ExpandedNodes = {};
    allNodeIds.forEach(id => {
      allExpanded[id] = true;
    });
    setExpandedNodes(allExpanded);
  }, [allNodeIds]);

  /**
   * Collapse semua nodes
   */
  const collapseAll = useCallback(() => {
    setExpandedNodes({});
  }, []);

  /**
   * Set expanded nodes based on search results
   * Auto-expand parents yang memiliki matching children
   */
  const setExpandedFromSearch = useCallback((matchingIds: Set<string>) => {
    const newExpanded: ExpandedNodes = {};
    
    // Helper function untuk expand parents
    const expandParents = (node: EquipmentNode, shouldExpand = false): boolean => {
      let hasMatchingChild = false;
      
      if (node.children) {
        for (const child of node.children) {
          const childHasMatch = expandParents(child, shouldExpand);
          if (childHasMatch || matchingIds.has(child.id)) {
            hasMatchingChild = true;
          }
        }
      }
      
      if (hasMatchingChild || shouldExpand || matchingIds.has(node.id)) {
        newExpanded[node.id] = true;
        return true;
      }
      
      return false;
    };
    
    expandParents(equipmentData);
    setExpandedNodes(newExpanded);
  }, [equipmentData]);

  return {
    expandedNodes,
    toggleNode,
    expandAll,
    collapseAll,
    setExpandedFromSearch,
  };
}