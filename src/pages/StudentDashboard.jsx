import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { SearchBar } from '@/components/SearchBar';
import { DepartmentCard } from '@/components/DepartmentCard';
import { FacultyCard } from '@/components/FacultyCard';
import { departments, facultyData, searchFaculty } from '@/data/facultyData';
import { Building2, Search, TrendingUp, Users } from 'lucide-react';

export function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const results = searchFaculty(searchQuery);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-text-primary dark:text-white mb-2">Welcome to CampusTracker</h1>
          <p className="text-text-secondary dark:text-gray-400">Find and connect with faculty members across departments</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Search Results */}
        {isSearching && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-text-secondary dark:text-gray-400" />
              <h2 className="text-xl font-semibold text-text-primary dark:text-white">
                Search Results ({searchResults.length})
              </h2>
            </div>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            ) : (
              <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
                <CardContent className="py-12 text-center">
                  <Search className="h-12 w-12 text-text-secondary dark:text-gray-400 mx-auto mb-4" />
                  <p className="text-text-secondary dark:text-gray-400">No faculty members found matching your search</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Departments Section */}
        {!isSearching && (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-text-secondary dark:text-gray-400" />
                <h2 className="text-xl font-semibold text-text-primary dark:text-white">Departments</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {departments.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-1">Total Faculty</p>
                      <p className="text-2xl font-semibold text-text-primary dark:text-white">{facultyData.length}</p>
                    </div>
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-1">Departments</p>
                      <p className="text-2xl font-semibold text-text-primary dark:text-white">{departments.length}</p>
                    </div>
                    <div className="bg-accent-secondary/10 dark:bg-accent-secondary/20 p-3 rounded-lg">
                      <Building2 className="h-6 w-6 text-accent-secondary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary dark:text-gray-400 mb-1">Available Now</p>
                      <p className="text-2xl font-semibold text-text-primary dark:text-white">
                        {facultyData.filter((f) => f.currentStatus === 'Free' || f.currentStatus === 'In Cabin').length}
                      </p>
                    </div>
                    <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Faculty */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-text-primary dark:text-white">All Faculty</h2>
                <Link
                  to="/search"
                  className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facultyData.slice(0, 6).map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
