import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { Users, ArrowRight } from 'lucide-react';
import { getFacultyByDepartment } from '@/data/facultyData';

export function DepartmentCard({ department }) {
  const facultyCount = getFacultyByDepartment(department.id).length;
  const colorClasses = {
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    sky: 'bg-sky-500',
  };

  return (
    <Link to={`/departments/${department.id}`}>
      <Card className="hover:shadow-md transition-smooth cursor-pointer overflow-hidden group">
        <div className={`h-2 ${colorClasses[department.color]}`} />
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary dark:text-white">{department.id}</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">{department.name}</p>
              <div className="flex items-center gap-2 mt-4 text-text-secondary dark:text-gray-400">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">{facultyCount} Faculty Members</span>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-text-secondary dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

