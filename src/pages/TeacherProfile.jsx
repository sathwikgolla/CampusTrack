import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function TeacherProfile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 shadow-xl border-0 bg-gradient-to-br from-blue-100 to-cyan-100">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <User className="h-16 w-16 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {user?.name || 'Teacher'}
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200 rounded-full">
                  <Building2 className="h-4 w-4 text-blue-700" />
                  <span className="text-sm font-semibold text-blue-700">Faculty Member</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-t-xl">
              <CardTitle className="text-2xl font-bold">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Mail className="h-6 w-6 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Email</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{user?.email || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg">
                <Building2 className="h-6 w-6 text-cyan-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Department</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{user?.department || 'CSE'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg">
                <MapPin className="h-6 w-6 text-teal-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Cabin</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">Block A - Room 204</p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/teacher/update-status">
                  <Button className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 text-white font-bold py-3 shadow-lg">
                    Update Status
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

