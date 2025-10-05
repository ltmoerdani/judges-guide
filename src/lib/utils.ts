import { clsx, type ClassValue } from 'clsx';
import type { EquipmentNode } from '@/types';

/**
 * Utility function untuk menggabungkan class names dengan clsx
 * @param inputs - Array class names atau conditional classes
 * @returns - String class names yang sudah digabung
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Debounce function untuk performance optimization
 * @param func - Function yang akan di-debounce
 * @param wait - Delay dalam milliseconds
 * @returns - Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Mengambil semua ID node dari tree structure
 * @param node - Root node untuk traverse
 * @returns - Array berisi semua node IDs
 */
export function getAllNodeIds(node: EquipmentNode): string[] {
  const ids = [node.id];
  if (node.children) {
    node.children.forEach(child => {
      ids.push(...getAllNodeIds(child));
    });
  }
  return ids;
}

/**
 * Mencari node berdasarkan ID
 * @param node - Root node untuk pencarian
 * @param targetId - ID yang dicari
 * @returns - Node yang ditemukan atau undefined
 */
export function findNodeById(node: EquipmentNode, targetId: string): EquipmentNode | undefined {
  if (node.id === targetId) {
    return node;
  }
  
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, targetId);
      if (found) return found;
    }
  }
  
  return undefined;
}

/**
 * Get highlight data untuk text yang match dengan search term
 * @param text - Text yang akan di-highlight
 * @param searchTerm - Term yang dicari
 * @returns - Array of text parts dengan info apakah match atau tidak
 */
export function getHighlightParts(text: string, searchTerm: string): { text: string; isHighlight: boolean }[] {
  if (!searchTerm || !text) return [{ text, isHighlight: false }];
  
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return parts.map(part => ({
    text: part,
    isHighlight: part.toLowerCase() === searchTerm.toLowerCase()
  }));
}

/**
 * Mencari text di dalam node (semua field)
 * @param node - Node yang akan dicari
 * @param searchTerm - Term yang dicari
 * @returns - Boolean apakah ada match
 */
export function searchInNode(node: EquipmentNode, searchTerm: string): boolean {
  if (!searchTerm) return true;
  
  const lowerTerm = searchTerm.toLowerCase();
  const searchableText = [
    node.name,
    node.ref,
    node.useCase,
    node.specs,
    node.subtitle
  ].filter(Boolean).join(' ').toLowerCase();
  
  return searchableText.includes(lowerTerm);
}

/**
 * Check apakah node memiliki descendant yang match search
 * @param node - Node yang akan dicek
 * @param searchTerm - Term yang dicari
 * @returns - Boolean apakah ada descendant match
 */
export function hasMatchingDescendant(node: EquipmentNode, searchTerm: string): boolean {
  if (!searchTerm) return true;
  if (searchInNode(node, searchTerm)) return true;
  
  if (node.children) {
    return node.children.some(child => hasMatchingDescendant(child, searchTerm));
  }
  
  return false;
}

/**
 * Get node IDs yang match search term
 * @param node - Root node
 * @param searchTerm - Term yang dicari
 * @param parentMatches - Apakah parent node match
 * @returns - Set berisi matching node IDs
 */
export function getMatchingNodeIds(
  node: EquipmentNode, 
  searchTerm: string, 
  parentMatches = false
): Set<string> {
  const matchingIds = new Set<string>();
  const nodeMatches = searchInNode(node, searchTerm);
  
  if (nodeMatches || parentMatches) {
    matchingIds.add(node.id);
  }
  
  if (node.children) {
    node.children.forEach(child => {
      const childMatches = getMatchingNodeIds(child, searchTerm, nodeMatches || parentMatches);
      childMatches.forEach(id => matchingIds.add(id));
    });
  }
  
  return matchingIds;
}

/**
 * Count total matches dalam tree
 * @param node - Root node
 * @param searchTerm - Term yang dicari
 * @returns - Jumlah matches
 */
export function countMatches(node: EquipmentNode, searchTerm: string): number {
  if (!searchTerm) return 0;
  
  let count = 0;
  
  const countInNode = (currentNode: EquipmentNode) => {
    if (searchInNode(currentNode, searchTerm)) {
      count++;
    }
    if (currentNode.children) {
      currentNode.children.forEach(countInNode);
    }
  };
  
  countInNode(node);
  return count;
}

/**
 * Format node color berdasarkan type atau default
 * @param color - Color string dari node
 * @returns - Formatted CSS classes
 */
export function getNodeColorClasses(color?: string): string {
  if (!color) {
    return 'bg-white border-gray-300 hover:border-gray-400';
  }
  
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-50 border-blue-400 hover:border-blue-500',
    'green': 'bg-green-50 border-green-400 hover:border-green-500',
    'yellow': 'bg-yellow-50 border-yellow-400 hover:border-yellow-500',
    'red': 'bg-red-50 border-red-400 hover:border-red-500',
    'purple': 'bg-purple-50 border-purple-400 hover:border-purple-500',
    'pink': 'bg-pink-50 border-pink-400 hover:border-pink-500',
    'indigo': 'bg-indigo-50 border-indigo-400 hover:border-indigo-500',
    'orange': 'bg-orange-50 border-orange-400 hover:border-orange-500',
    'gray': 'bg-gray-50 border-gray-300 hover:border-gray-400',
  };
  
  return colorMap[color] || color;
}

/**
 * Generate unique key untuk React components
 * @param prefix - Prefix untuk key
 * @param id - ID yang akan digabung
 * @returns - Unique key string
 */
export function generateKey(prefix: string, id: string): string {
  return `${prefix}-${id}`;
}