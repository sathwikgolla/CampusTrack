import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from './ui/Input';
import { cn } from '@/lib/utils';

export function SearchBar({ onSearch, placeholder = 'Search faculty by name, department, or email...', className }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="pl-10 pr-10 w-full"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-smooth"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

