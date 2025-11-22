import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Search, Building2, Clock, Users, BookOpen, Target } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Footer } from '@/components/Footer';
import { Logo } from '@/components/Logo';

export function Home() {
  const { user, userType } = useAuth();

  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find faculty members quickly with advanced search functionality across departments and specializations.',
    },
    {
      icon: Building2,
      title: 'Department View',
      description: 'Browse faculty organized by departments with detailed information and availability status.',
    },
    {
      icon: Clock,
      title: 'Real-time Status',
      description: 'See current availability status of faculty members - Teaching, In Cabin, Free, or On Leave.',
    },
    {
      icon: Users,
      title: 'Faculty Profiles',
      description: 'Access comprehensive profiles with contact information, office hours, and timetables.',
    },
    {
      icon: BookOpen,
      title: 'Timetable Access',
      description: 'View complete weekly schedules for all faculty members to plan your visits efficiently.',
    },
    {
      icon: Target,
      title: 'Easy Navigation',
      description: 'Intuitive interface designed for both students and faculty to connect seamlessly.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-card dark:bg-secondary border-b border-gray-200 dark:border-gray-700">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            {/* Logo Section */}
            <div className="flex justify-center mb-8">
              <Logo size="xl" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-text-primary dark:text-white mb-4 leading-tight">
              Welcome to CampusTracker
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary dark:text-gray-400 font-normal max-w-3xl mx-auto mb-10">
              Your comprehensive solution for finding and connecting with faculty members across campus
            </p>

            {user && (
              <Link to={userType === 'teacher' ? '/teacher/dashboard' : '/dashboard'}>
                <Button size="lg">
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background-light dark:bg-background-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary dark:text-white mb-4">
              Why Choose CampusTracker?
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
              Discover powerful features designed to make faculty-student interactions seamless and efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card dark:bg-secondary rounded-lg p-6 shadow-soft hover:shadow-card transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-card dark:bg-secondary border-t border-gray-200 dark:border-gray-700 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary dark:text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2">Register</h3>
              <p className="text-text-secondary dark:text-gray-400">
                Create your account as a student or faculty member to get started
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-secondary/10 dark:bg-accent-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-accent-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2">Search & Browse</h3>
              <p className="text-text-secondary dark:text-gray-400">
                Find faculty members by department, name, or specialization
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 dark:bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2">Connect</h3>
              <p className="text-text-secondary dark:text-gray-400">
                View availability, timetables, and contact information to connect
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
