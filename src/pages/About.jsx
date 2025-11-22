import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { GraduationCap, Users, Building2, Target } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-text-primary dark:text-white mb-4">About CampusTracker</h1>
          <p className="text-xl text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Your comprehensive solution for finding and connecting with faculty members across campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardHeader>
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary dark:text-gray-400">
                To simplify the process of finding and connecting with faculty members, making campus
                communication more efficient and accessible for students and staff.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardHeader>
              <div className="bg-accent-secondary/10 dark:bg-accent-secondary/20 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-accent-secondary" />
              </div>
              <CardTitle>Who We Serve</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary dark:text-gray-400">
                CampusTrack serves students, faculty members, and administrative staff, providing
                real-time information about faculty availability, locations, and schedules.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary dark:text-white mb-1">Department Browsing</h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400">
                    Browse faculty by department (CSE, CSM, ECE)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-accent-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary dark:text-white mb-1">Real-time Status</h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400">
                    View current availability and location of faculty
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary dark:text-white mb-1">Timetable View</h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400">
                    Access complete weekly schedules for all faculty
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary dark:text-white mb-1">Smart Search</h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400">
                    Find faculty quickly with advanced search functionality
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center text-text-secondary dark:text-gray-400">
          <p>© {new Date().getFullYear()} CampusTracker. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
