import { DepartmentCard } from '@/components/DepartmentCard';
import { departments } from '@/data/facultyData';
import { Building2 } from 'lucide-react';

export function DepartmentList() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-semibold text-text-primary dark:text-white">Departments</h1>
          </div>
          <p className="text-text-secondary dark:text-gray-400">Browse faculty by department</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>
      </div>
    </div>
  );
}
