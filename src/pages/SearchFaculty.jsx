import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { FacultyCard } from '@/components/FacultyCard';
import { Card, CardContent } from '@/components/ui/Card';
import { facultyData, searchFaculty } from '@/data/facultyData';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SearchFaculty() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(facultyData);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    let filtered = searchQuery.trim() ? searchFaculty(searchQuery) : facultyData;

    if (filter !== 'all') {
      filtered = filtered.filter((f) => {
        if (filter === 'available') {
          return f.currentStatus === 'Free' || f.currentStatus === 'In Cabin';
        }
        if (filter === 'teaching') {
          return f.currentStatus === 'Teaching';
        }
        if (filter === 'cabin') {
          return f.currentStatus === 'In Cabin';
        }
        return true;
      });
    }

    setResults(filtered);
  }, [searchQuery, filter]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-text-primary dark:text-white mb-2">Search Faculty</h1>
          <p className="text-text-secondary dark:text-gray-400">Find faculty members across all departments</p>
        </div>

        <div className="mb-6">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Filter className="h-5 w-5 text-text-secondary dark:text-gray-400" />
          <span className="text-sm font-medium text-text-primary dark:text-white">Filter by status:</span>
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'available' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('available')}
          >
            Available
          </Button>
          <Button
            variant={filter === 'teaching' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('teaching')}
          >
            Teaching
          </Button>
          <Button
            variant={filter === 'cabin' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('cabin')}
          >
            In Cabin
          </Button>
        </div>

        {results.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-text-secondary dark:text-gray-400">
              Found {results.length} faculty member{results.length !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </>
        ) : (
          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardContent className="py-12 text-center">
              <Search className="h-12 w-12 text-text-secondary dark:text-gray-400 mx-auto mb-4" />
              <p className="text-text-secondary dark:text-gray-400">No faculty members found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
