import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { facultyData } from '@/data/facultyData';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { SearchBar } from '@/components/SearchBar';
import { searchFaculty } from '@/data/facultyData';

export function Timetable() {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSearchResults(searchFaculty(query));
    } else {
      setSearchResults([]);
    }
  };

  const displayFaculty = searchQuery.trim() ? searchResults : facultyData;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-semibold text-text-primary dark:text-white">Faculty Timetables</h1>
          </div>
          <p className="text-text-secondary dark:text-gray-400">View timetables for all faculty members</p>
        </div>

        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder="Search faculty to view timetable..." />
        </div>

        {selectedFaculty ? (
          <Card className="mb-6 bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedFaculty.name} - Timetable</CardTitle>
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="text-sm text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 hover:underline transition-colors"
                >
                  Back to List
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary dark:text-white">Day</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary dark:text-white">Time</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary dark:text-white">Class</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text-primary dark:text-white">Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedFaculty.timetable.map((slot, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 dark:border-gray-800 ${
                          slot.class === 'Free' ? 'bg-gray-50 dark:bg-gray-800/50' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-sm text-text-primary dark:text-white">{slot.day}</td>
                        <td className="py-3 px-4 text-sm text-text-primary dark:text-white">{slot.slot}</td>
                        <td className="py-3 px-4 text-sm text-text-primary dark:text-white">{slot.class}</td>
                        <td className="py-3 px-4 text-sm text-text-primary dark:text-white">{slot.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayFaculty.map((faculty) => (
              <Card
                key={faculty.id}
                className="hover:shadow-card transition-shadow cursor-pointer bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft"
                onClick={() => setSelectedFaculty(faculty)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={faculty.photo}
                      alt={faculty.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=3B82F6&color=fff`;
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary dark:text-white">{faculty.name}</h3>
                      <p className="text-sm text-text-secondary dark:text-gray-400">{faculty.department}</p>
                      <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">
                        {faculty.timetable.filter((s) => s.class !== 'Free').length} classes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {displayFaculty.length === 0 && (
          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardContent className="py-12 text-center">
              <Calendar className="h-12 w-12 text-text-secondary dark:text-gray-400 mx-auto mb-4" />
              <p className="text-text-secondary dark:text-gray-400">No faculty members found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
