import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/Toast';
import { User, Mail, Phone, BookOpen, GraduationCap, Edit } from 'lucide-react';
import { useState } from 'react';

export function StudentProfile() {
  const { user } = useAuth();
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || user?.rollNumber || '',
    phone: user?.phone || '',
    rollNumber: user?.rollNumber || '',
    course: user?.course || '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    addToast('Profile updated successfully!', 'success');
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
          My Profile
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 shadow-xl border-0 bg-gradient-to-br from-purple-100 to-pink-100">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <User className="h-16 w-16 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {formData.name || 'Student'}
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-200 rounded-full">
                  <GraduationCap className="h-4 w-4 text-purple-700" />
                  <span className="text-sm font-semibold text-purple-700">Student</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details Card */}
          <Card className="lg:col-span-2 shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-t-xl">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">Profile Information</CardTitle>
                {!isEditing && (
                  <Button
                    variant="ghost"
                    onClick={() => setIsEditing(true)}
                    className="text-white hover:bg-white/20"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Roll Number</p>
                  {isEditing ? (
                    <Input
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleChange}
                      className="mt-1 border-purple-200"
                    />
                  ) : (
                    <p className="text-lg font-bold text-gray-900 mt-1">{formData.rollNumber}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                <User className="h-6 w-6 text-pink-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Full Name</p>
                  {isEditing ? (
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 border-pink-200"
                    />
                  ) : (
                    <p className="text-lg font-bold text-gray-900 mt-1">{formData.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <Mail className="h-6 w-6 text-orange-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Email</p>
                  {isEditing ? (
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 border-orange-200"
                    />
                  ) : (
                    <p className="text-lg font-bold text-gray-900 mt-1">{formData.email}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <Phone className="h-6 w-6 text-purple-500" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">Phone Number</p>
                  {isEditing ? (
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 border-purple-200"
                    />
                  ) : (
                    <p className="text-lg font-bold text-gray-900 mt-1">{formData.phone || 'Not provided'}</p>
                  )}
                </div>
              </div>

              {formData.course && (
                <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-pink-500" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600">Course</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{formData.course}</p>
                  </div>
                </div>
              )}

              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-bold py-3 shadow-lg"
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="border-2 border-gray-300 font-semibold py-3"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

