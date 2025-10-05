import { Search, X, Loader2 } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import type { SearchBarProps } from '@/types';

/**
 * SearchBar component dengan live search dan hasil counter
 * Menggunakan debounced input untuk performance optimization
 */
export default function SearchBar({
  value,
  onChange,
  onClear,
  matchCount,
  isLoading = false
}: Readonly<SearchBarProps>) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onClear();
  };

  return (
    <div className="relative max-w-2xl mx-auto w-full">
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="🔍 Cari equipment... (contoh: string, sight, 12.2cm, compound, barebow, pressure point)"
        className="shadow-sm"
        leftIcon={<Search className="h-5 w-5 text-gray-500" />}
        rightIcon={
          <div className="flex items-center gap-2">
            {isLoading && (
              <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
            )}
            {value && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="h-7 w-7 p-0 hover:bg-red-100 hover:text-red-600 rounded-md transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        }
      />
      
      {/* Search Results Counter */}
      {value && matchCount > 0 && (
        <div className="absolute top-full mt-2 left-0">
          <Badge variant="success" size="md">
            ✅ Ditemukan: {matchCount} hasil
          </Badge>
        </div>
      )}
      
      {value && matchCount === 0 && !isLoading && (
        <div className="absolute top-full mt-2 left-0">
          <Badge variant="warning" size="md">
            ⚠️ Tidak ada hasil ditemukan
          </Badge>
        </div>
      )}
    </div>
  );
}