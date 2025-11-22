import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

// Student Pages
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { StudentRegistration } from '@/pages/StudentRegistration';
import { StudentDashboard } from '@/pages/StudentDashboard';
import { SearchFaculty } from '@/pages/SearchFaculty';
import { FacultyDetails } from '@/pages/FacultyDetails';
import { DepartmentList } from '@/pages/DepartmentList';
import { DepartmentFaculty } from '@/pages/DepartmentFaculty';
import { Settings } from '@/pages/Settings';
import { StudentProfile } from '@/pages/StudentProfile';

// Teacher Pages
import { TeacherLogin } from '@/pages/TeacherLogin';
import { TeacherRegistration } from '@/pages/TeacherRegistration';
import { TeacherDashboard } from '@/pages/TeacherDashboard';
import { UpdateStatus } from '@/pages/UpdateStatus';
import { TeacherProfile } from '@/pages/TeacherProfile';

// Shared Pages
import { Timetable } from '@/pages/Timetable';
import { About } from '@/pages/About';
import { Home } from '@/pages/Home';
import { ForgotPassword } from '@/pages/ForgotPassword';

function ProtectedRoute({ children, allowedUserType }) {
  const { user, userType, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={allowedUserType === 'teacher' ? '/teacher/login' : '/login'} replace />;
  }

  // If userType is not set but user exists, allow access (userType will be set by AuthContext)
  // Only redirect if userType is explicitly set and doesn't match
  if (allowedUserType && userType && userType !== allowedUserType) {
    return <Navigate to={allowedUserType === 'teacher' ? '/teacher/login' : '/login'} replace />;
  }

  return children;
}

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Navigate to="/register" replace />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/register" element={<StudentRegistration />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/teacher/register" element={<TeacherRegistration />} />
      <Route path="/about" element={<About />} />

      {/* Student Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedUserType="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute allowedUserType="student">
            <SearchFaculty />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faculty/:id"
        element={
          <ProtectedRoute allowedUserType="student">
            <FacultyDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/departments"
        element={
          <ProtectedRoute allowedUserType="student">
            <DepartmentList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/departments/:departmentId"
        element={
          <ProtectedRoute allowedUserType="student">
            <DepartmentFaculty />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute allowedUserType="student">
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedUserType="student">
            <StudentProfile />
          </ProtectedRoute>
        }
      />

      {/* Teacher Routes */}
      <Route
        path="/teacher/dashboard"
        element={
          <ProtectedRoute allowedUserType="teacher">
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/update-status"
        element={
          <ProtectedRoute allowedUserType="teacher">
            <UpdateStatus />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/profile"
        element={
          <ProtectedRoute allowedUserType="teacher">
            <TeacherProfile />
          </ProtectedRoute>
        }
      />

      {/* Shared Routes */}
      <Route
        path="/timetable"
        element={
          <ProtectedRoute>
            <Timetable />
          </ProtectedRoute>
        }
      />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

