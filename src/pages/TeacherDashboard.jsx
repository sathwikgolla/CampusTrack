import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, Clock, MapPin, User, Edit } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TeacherDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-text-primary dark:text-white mb-2">
            Welcome, {user?.name || 'Teacher'}
          </h1>
          <p className="text-text-secondary dark:text-gray-400">Manage your status and availability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/teacher/update-status">
            <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-card transition-shadow cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary dark:text-gray-400 mb-1">Update Status</p>
                    <p className="text-lg font-semibold text-text-primary dark:text-white">Change Availability</p>
                  </div>
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                    <Edit className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-secondary dark:text-gray-400 mb-1">Current Status</p>
                  <p className="text-lg font-semibold text-text-primary dark:text-white">In Cabin</p>
                </div>
                <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-lg">
                  <User className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-secondary dark:text-gray-400 mb-1">Location</p>
                  <p className="text-lg font-semibold text-text-primary dark:text-white">Block A - Room 204</p>
                </div>
                <div className="bg-accent-secondary/10 dark:bg-accent-secondary/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-text-primary dark:text-white">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 dark:border-primary/30">
                  <div>
                    <p className="font-medium text-text-primary dark:text-white">CSE-A</p>
                    <p className="text-sm text-text-secondary dark:text-gray-400">10:00 - 11:00</p>
                  </div>
                  <div className="text-sm text-text-secondary dark:text-gray-400">Room 302</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="font-medium text-text-primary dark:text-white">Free</p>
                    <p className="text-sm text-text-secondary dark:text-gray-400">11:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-text-primary dark:text-white">
                <Clock className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/teacher/update-status">
                <Button className="w-full" variant="default">
                  Update Status
                </Button>
              </Link>
              <Link to="/teacher/profile">
                <Button className="w-full" variant="outline">
                  View Profile
                </Button>
              </Link>
              <Link to="/timetable">
                <Button className="w-full" variant="outline">
                  View Timetable
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
