import { FolderOpen, Folder, RotateCcw } from 'lucide-react';
import Button from '@/components/ui/Button';
import type { ControlPanelProps } from '@/types';

/**
 * ControlPanel untuk manage expand/collapse state dan search actions
 * Komponen yang reusable dan mudah di-maintain
 */
export default function ControlPanel({
  onExpandAll,
  onCollapseAll,
  onClearSearch,
  hasSearchTerm
}: Readonly<ControlPanelProps>) {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      <div className="flex gap-2">
        <Button
          onClick={onExpandAll}
          variant="primary"
          size="md"
          className="flex items-center gap-2"
        >
          <FolderOpen className="w-4 h-4" />
          📂 Expand All
        </Button>
        
        <Button
          onClick={onCollapseAll}
          variant="secondary"
          size="md"
          className="flex items-center gap-2"
        >
          <Folder className="w-4 h-4" />
          📁 Collapse All
        </Button>
        
        {hasSearchTerm && (
          <Button
            onClick={onClearSearch}
            variant="ghost"
            size="md"
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Search
          </Button>
        )}
      </div>
    </div>
  );
}