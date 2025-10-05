import { getHighlightParts } from '@/lib/utils';

/**
 * Component untuk highlight text berdasarkan search term
 * Menggunakan mark element dengan styling kuning
 */
interface HighlightedTextProps {
  text: string;
  searchTerm: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, searchTerm }) => {
  const parts = getHighlightParts(text, searchTerm);
  
  return (
    <>
      {parts.map((part, index) => {
        // Generate unique key berdasarkan content dan position
        const key = `${part.text}-${index}-${part.isHighlight}`;
        
        return part.isHighlight ? (
          <mark key={key} className="bg-yellow-300 font-semibold">
            {part.text}
          </mark>
        ) : (
          <span key={key}>{part.text}</span>
        );
      })}
    </>
  );
};

/**
 * Utility function untuk digunakan langsung di JSX
 * @param text - Text yang akan di-highlight
 * @param searchTerm - Term yang dicari
 * @returns - JSX element dengan highlighting
 */
export function highlightText(text: string, searchTerm: string) {
  return <HighlightedText text={text} searchTerm={searchTerm} />;
}
