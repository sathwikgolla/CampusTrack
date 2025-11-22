import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FacultyCard } from '@/components/FacultyCard';
import { SearchBar } from '@/components/SearchBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getFacultyByDepartment, departments, searchFaculty } from '@/data/facultyData';
import { Building2, Filter, Search } from 'lucide-react';

export function DepartmentFaculty() {
  const { departmentId } = useParams();
  const [faculty, setFaculty] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const department = departments.find((d) => d.id === departmentId);

  useEffect(() => {
    let deptFaculty = getFacultyByDepartment(departmentId);

    if (searchQuery.trim()) {
      const searchResults = searchFaculty(searchQuery);
      deptFaculty = deptFaculty.filter((f) =>
        searchResults.some((r) => r.id === f.id)
      );
    }

    if (filter !== 'all') {
      deptFaculty = deptFaculty.filter((f) => {
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

    setFaculty(deptFaculty);
  }, [departmentId, searchQuery, filter]);

  if (!department) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="py-12 text-center">
            <p className="text-slate-600">Department not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const colorClasses = {
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    sky: 'bg-sky-500',
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Department Banner */}
        <div className={`${colorClasses[department.color]} rounded-xl p-8 mb-8 text-white`}>
          <div className="flex items-center gap-4 mb-2">
            <Building2 className="h-8 w-8" />
            <h1 className="text-3xl font-bold">{department.id}</h1>
          </div>
          <p className="text-lg opacity-90">{department.name}</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search faculty in this department..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Filter className="h-5 w-5 text-slate-600" />
          <span className="text-sm font-medium text-slate-700">Filter by status:</span>
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

        {/* Faculty Grid */}
        {faculty.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-slate-600">
              {faculty.length} faculty member{faculty.length !== 1 ? 's' : ''} found
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((f) => (
                <FacultyCard key={f.id} faculty={f} />
              ))}
            </div>
          </>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">No faculty members found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

