import { Target, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import SearchBar from './features/SearchBar';
import ControlPanel from './features/ControlPanel';
import Node from './features/Node';
import { MindmapProvider, useMindmap } from './features/MindmapContext';

/**
 * Header component dengan title dan informasi
 */
function MindmapHeader() {
  return (
    <motion.div 
      className="mb-8 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Title Section */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          ARCHERY RULES MASTER GUIDE
        </h1>
      </div>
      
      <p className="text-base sm:text-lg text-gray-600 italic mb-6">
        Equipment & Scoring Reference • World Archery Judge Guide Book 2024
      </p>

      {/* Info Panel */}
      <motion.div 
        className="mt-6 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-left space-y-3">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Cara Pakai:</span> Klik pada setiap node untuk expand/collapse. 
              Setiap equipment dilengkapi dengan referensi Book & Chapter yang valid dari World Archery Rules.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-red-600">BARU:</span> Mindmap Scoring System lengkap dengan 100+ use cases 
              plus Equipment Inspection Procedure untuk judges!
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-green-600">SEARCH:</span> Ketik kata kunci di search bar untuk filter equipment secara instan! 
              Text yang match akan di-highlight kuning.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Main content component
 */
function MindmapContent() {
  const {
    equipmentData,
    expandedNodes,
    searchState,
    toggleNode,
    expandAll,
    collapseAll,
    setSearchTerm,
    clearSearch
  } = useMindmap();

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SearchBar
          value={searchState.term}
          onChange={setSearchTerm}
          onClear={clearSearch}
          matchCount={searchState.matchCount}
          isLoading={searchState.isLoading}
        />
        
        <ControlPanel
          onExpandAll={expandAll}
          onCollapseAll={collapseAll}
          onClearSearch={clearSearch}
          matchCount={searchState.matchCount}
          hasSearchTerm={!!searchState.term}
        />
      </motion.div>

      {/* Main Mindmap */}
      <motion.div 
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Node
          node={equipmentData}
          expandedNodes={expandedNodes}
          searchTerm={searchState.term}
          onToggle={toggleNode}
        />
      </motion.div>
    </div>
  );
}

/**
 * Legend and tips footer
 */
function MindmapFooter() {
  return (
    <motion.div 
      className="mt-8 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <p className="font-bold mb-4 text-base text-gray-900">LEGEND & TIPS:</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <span className="text-blue-600 font-semibold">Book 3</span> = Indoor & Outdoor Target Archery</li>
          <li>• <span className="text-blue-600 font-semibold">Book 4</span> = Field & 3D Archery</li>
          <li>• <span className="text-blue-600 font-semibold">Book 5</span> = Run Archery & Flight Archery</li>
          <li>• <span className="text-green-600 font-semibold">Judge Guidebook</span> = Procedures & Interpretations</li>
          <li>• <span className="text-green-600 font-semibold">Ch.</span> = Chapter (Bab)</li>
        </ul>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <span className="text-orange-600 font-semibold">🔍 SEARCH TIPS:</span> Coba search: "string", "sight", "12.2cm", "compound", "pressure point"</li>
          <li>• <span className="text-orange-600 font-semibold">Highlight Kuning</span> = Text yang match dengan search</li>
          <li>• <span className="text-orange-600 font-semibold">Ring Kuning</span> = Node yang match dengan search</li>
          <li>• Gunakan keyboard navigation: Tab untuk navigate, Enter/Space untuk toggle</li>
        </ul>
      </div>
    </motion.div>
  );
}

/**
 * Main ArcheryMindmap component
 * Entry point yang menggabungkan semua komponen
 */
export default function ArcheryMindmap() {
  return (
    <MindmapProvider>
      <div className="w-full min-h-screen bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <MindmapHeader />
          <MindmapContent />
          <MindmapFooter />
        </div>
      </div>
    </MindmapProvider>
  );
}