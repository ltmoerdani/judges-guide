import { memo } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import { cn, getNodeColorClasses, hasMatchingDescendant } from '@/lib/utils';
import { highlightText } from '@/lib/highlightText';
import type { NodeProps } from '@/types';

/**
 * Node component untuk menampilkan single equipment item
 * Optimized dengan React.memo untuk performance
 */
function Node({ 
  node, 
  level = 0, 
  isSearchHighlighted = false,
  expandedNodes,
  searchTerm,
  onToggle
}: NodeProps & {
  expandedNodes: { [key: string]: boolean };
  searchTerm: string;
  onToggle: (id: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes[node.id];
  const indent = level * 24;
  
  // Filter children berdasarkan search
  const visibleChildren = hasChildren && searchTerm
    ? node.children!.filter(child => hasMatchingDescendant(child, searchTerm))
    : node.children;
  
  // Don't render if doesn't match search
  if (searchTerm && !hasMatchingDescendant(node, searchTerm)) {
    return null;
  }
  
  const handleToggle = () => {
    if (hasChildren) {
      onToggle(node.id);
    }
  };

  // Animation variants
  const nodeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15
      }
    }
  };

  const childrenVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Gunakan button element yang proper untuk interactive nodes
  const NodeWrapper = hasChildren ? 'button' : 'div';
  
  return (
    <motion.div
      className="mb-3"
      variants={nodeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NodeWrapper
        className={cn(
          'flex items-start p-4 rounded-lg border-2 transition-all duration-200 w-full text-left',
          hasChildren && 'cursor-pointer hover:shadow-md',
          getNodeColorClasses(node.color),
          isSearchHighlighted && searchTerm ? 'ring-2 ring-yellow-400 ring-offset-2' : '',
          'group'
        )}
        style={{ marginLeft: `${indent}px` }}
        onClick={hasChildren ? handleToggle : undefined}
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-label={hasChildren ? `Toggle ${node.name} section` : undefined}
        {...(hasChildren ? { type: 'button' as const } : {})}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren && (
          <div className="mr-3 mt-1 flex-shrink-0 transition-transform duration-200">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">
              {highlightText(node.name, searchTerm)}
            </h3>
            {node.ref && (
              <Badge variant="info" size="sm">
                {highlightText(node.ref, searchTerm)}
              </Badge>
            )}
          </div>
          
          {/* Subtitle */}
          {node.subtitle && (
            <p className="text-sm sm:text-base text-gray-600 italic mb-3 leading-relaxed">
              {highlightText(node.subtitle, searchTerm)}
            </p>
          )}
          
          {/* Use Case */}
          {node.useCase && (
            <div className="mt-3 p-3 sm:p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                <span className="font-bold text-green-700">
                  Use Case: 
                </span>
                {highlightText(node.useCase, searchTerm)}
              </p>
            </div>
          )}
          
          {/* Specs */}
          {node.specs && (
            <div className="mt-3 p-3 sm:p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                <span className="font-bold text-orange-700">
                  Specs: 
                </span>
                {highlightText(node.specs, searchTerm)}
              </p>
            </div>
          )}
        </div>
      </NodeWrapper>

      {/* Children */}
      <AnimatePresence>
        {hasChildren && isExpanded && visibleChildren && visibleChildren.length > 0 && (
          <motion.div
            className="mt-3 space-y-3"
            variants={childrenVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {visibleChildren.map((child) => (
              <Node
                key={child.id}
                node={child}
                level={level + 1}
                isSearchHighlighted={isSearchHighlighted}
                expandedNodes={expandedNodes}
                searchTerm={searchTerm}
                onToggle={onToggle}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Memoize component untuk performance optimization
export default memo(Node);