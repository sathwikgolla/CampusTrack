import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { StatusBadge } from './StatusBadge';
import { MapPin, Mail } from 'lucide-react';

export function FacultyCard({ faculty }) {
  return (
    <Link to={`/faculty/${faculty.id}`}>
      <Card className="hover:shadow-md transition-smooth cursor-pointer h-full">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=3B82F6&color=fff`;
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-text-primary dark:text-white truncate">
                {faculty.name}
              </h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">{faculty.department}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <StatusBadge status={faculty.currentStatus} />
              </div>
              <div className="mt-3 space-y-1.5 text-xs text-text-secondary dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="truncate">{faculty.currentLocation}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" />
                  <span className="truncate">{faculty.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

