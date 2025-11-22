import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Building2, User, LogOut, Menu, X, Sun, Moon, GraduationCap, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Logo } from './Logo';

export function Navbar() {
  const { user, logout, userType } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [teacherDropdownOpen, setTeacherDropdownOpen] = useState(false);
  const studentDropdownRef = useRef(null);
  const teacherDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (studentDropdownRef.current && !studentDropdownRef.current.contains(event.target)) {
        setStudentDropdownOpen(false);
      }
      if (teacherDropdownRef.current && !teacherDropdownRef.current.contains(event.target)) {
        setTeacherDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = user
    ? [
        { path: userType === 'student' ? '/dashboard' : '/teacher/dashboard', label: 'Home', icon: Home },
        { path: '/departments', label: 'Departments', icon: Building2 },
        { path: '/search', label: 'Search', icon: Search },
        { path: userType === 'student' ? '/profile' : '/teacher/profile', label: 'Profile', icon: User },
      ]
    : [];

  return (
    <nav className="relative z-50 bg-card dark:bg-secondary shadow-navbar border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="flex items-center gap-2">
              <Logo size="default" showText={false} />
              <div className="font-semibold text-xl font-display">
                <span className="text-text-primary dark:text-white">Campus</span>
                <span className="text-accent">Tracker</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-text-secondary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary-light'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              {!user && (
                <>
                  {/* Student Login Dropdown */}
                  <div className="relative z-[100]" ref={studentDropdownRef}>
                    <button
                      onClick={() => {
                        setStudentDropdownOpen(!studentDropdownOpen);
                        setTeacherDropdownOpen(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        studentDropdownOpen
                          ? 'bg-primary text-white'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      } shadow-soft`}
                    >
                      <GraduationCap className="h-5 w-5" />
                      <span className="text-sm">Student</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${studentDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {studentDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-card dark:bg-secondary rounded-lg shadow-card border border-gray-200 dark:border-gray-700 py-1 z-[9999] animate-fadeIn">
                        <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wide">Student Access</p>
                        </div>
                        <Link
                          to="/login"
                          onClick={() => setStudentDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span>Login as Student</span>
                        </Link>
                        <Link
                          to="/register"
                          onClick={() => setStudentDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span>Register as Student</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Teacher Login Dropdown */}
                  <div className="relative z-[100]" ref={teacherDropdownRef}>
                    <button
                      onClick={() => {
                        setTeacherDropdownOpen(!teacherDropdownOpen);
                        setStudentDropdownOpen(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        teacherDropdownOpen
                          ? 'bg-accent-secondary text-white'
                          : 'bg-accent-secondary text-white hover:opacity-90'
                      } shadow-soft`}
                    >
                      <User className="h-5 w-5" />
                      <span className="text-sm">Teacher</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${teacherDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {teacherDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-card dark:bg-secondary rounded-lg shadow-card border border-gray-200 dark:border-gray-700 py-1 z-[9999] animate-fadeIn">
                        <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wide">Teacher Access</p>
                        </div>
                        <Link
                          to="/teacher/login"
                          onClick={() => setTeacherDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <User className="h-4 w-4 text-accent-secondary" />
                          <span>Login as Teacher</span>
                        </Link>
                        <Link
                          to="/teacher/register"
                          onClick={() => setTeacherDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <User className="h-4 w-4 text-accent-secondary" />
                          <span>Register as Teacher</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-secondary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label="Toggle theme"
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              
              {user && (
                <>
                  <div className="flex items-center gap-2 text-text-secondary dark:text-slate-300 text-sm">
                    <User className="h-4 w-4" />
                    <span className="capitalize">{userType}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-text-secondary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-text-secondary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary-light'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
              
              {!user && (
                <>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Login as Student
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span className="ml-6">Register</span>
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                    <Link
                      to="/teacher/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <User className="h-4 w-4" />
                      Login as Teacher
                    </Link>
                    <Link
                      to="/teacher/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span className="ml-6">Register</span>
                    </Link>
                  </div>
                </>
              )}

              <div className="flex items-center justify-between px-3 py-2 border-t border-slate-200 dark:border-slate-700 mt-2">
                {/* Theme Toggle Mobile */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                  title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </button>
                
                {user && (
                  <>
                    <div className="flex items-center gap-2 text-text-secondary dark:text-slate-300 text-sm">
                      <User className="h-4 w-4" />
                      <span className="capitalize">{userType}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                      className="text-text-secondary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

