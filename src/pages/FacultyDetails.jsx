import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { StatusBadge } from '@/components/StatusBadge';
import { TimetableTable } from '@/components/TimetableTable';
import { getFacultyById } from '@/data/facultyData';
import { ArrowLeft, Mail, Phone, MapPin, Building2, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const faculty = getFacultyById(id);

  if (!faculty) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <Card className="max-w-md bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
          <CardContent className="py-12 text-center">
            <p className="text-text-secondary dark:text-gray-400 mb-4">Faculty member not found</p>
            <Button onClick={() => navigate('/dashboard')}>Go Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardContent className="p-6">
              <div className="text-center">
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 mx-auto mb-4"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=3B82F6&color=fff&size=128`;
                  }}
                />
                <h1 className="text-2xl font-semibold text-text-primary dark:text-white mb-2">{faculty.name}</h1>
                <div className="mb-4">
                  <StatusBadge status={faculty.currentStatus} />
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-sm">
                  <Building2 className="h-4 w-4 text-text-secondary dark:text-gray-400" />
                  <span className="text-text-primary dark:text-white">{faculty.department}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-text-secondary dark:text-gray-400" />
                  <span className="text-text-primary dark:text-white">{faculty.cabin}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-text-secondary dark:text-gray-400" />
                  <span className="text-text-primary dark:text-white">Current: {faculty.currentLocation}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-text-secondary dark:text-gray-400" />
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 hover:underline transition-colors"
                  >
                    {faculty.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-text-secondary dark:text-gray-400" />
                  <a
                    href={`tel:${faculty.phone}`}
                    className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 hover:underline transition-colors"
                  >
                    {faculty.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details Card */}
          <Card className="lg:col-span-2 bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
            <CardHeader>
              <CardTitle>Faculty Information</CardTitle>
            </CardHeader>
            <CardContent>
              <TimetableTable timetable={faculty.timetable} currentDay={currentDay} />
            </CardContent>
          </Card>
        </div>

        {/* Full Timetable */}
        <Card className="bg-card dark:bg-secondary border border-gray-200 dark:border-gray-700 shadow-soft">
          <CardHeader>
            <CardTitle>Weekly Timetable</CardTitle>
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
                  {faculty.timetable.map((slot, index) => (
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
      </div>
    </div>
  );
}
