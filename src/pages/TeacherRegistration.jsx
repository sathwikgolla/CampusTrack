import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/Toast';
import { User, Mail, Lock, Phone, Building2, BookOpen } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function TeacherRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    employeeId: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserType } = useAuth();
  const { addToast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.employeeId || !formData.password) {
      addToast('Please fill in all required fields', 'error');
      setLoading(false);
      return;
    }

    // Email format validation
    const { validateEmailFormat, isEmailAllowed } = await import('@/data/allowedEmails');
    const emailValidation = validateEmailFormat(formData.email);
    
    if (!emailValidation.valid) {
      addToast(emailValidation.message, 'error');
      setLoading(false);
      return;
    }

    // Check if email is allowed
    if (!isEmailAllowed(formData.email)) {
      addToast('This email does not have access to register. Please use an authorized email address.', 'error');
      setLoading(false);
      return;
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      addToast('Phone number must be exactly 10 digits', 'error');
      setLoading(false);
      return;
    }

    // Password must be at least 8 characters (letters and numbers allowed)
    if (!/^[a-zA-Z0-9]{8,}$/.test(formData.password)) {
      addToast('Password must be at least 8 characters (letters and numbers allowed)', 'error');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      addToast('Passwords do not match!', 'error');
      setLoading(false);
      return;
    }

    try {
      // Register in Firebase first (so forgot password will work)
      const { createUserWithEmailAndPassword } = await import('firebase/auth');
      const { auth } = await import('@/lib/firebase');
      
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Also save to local database for app-specific data
      const { saveRegisteredUser } = await import('@/data/usersData');
      const result = saveRegisteredUser({
        ...formData,
        userType: 'teacher',
      });

      if (!result.success) {
        // If local save fails, we still have Firebase account, but show warning
        console.warn('Local save failed:', result.message);
      }

      // Set user type and navigate
      setUserType('teacher');
      addToast('Registration successful! Welcome!', 'success');
      navigate('/teacher/dashboard');
    } catch (error) {
      // Handle Firebase registration errors
      let errorMessage = 'Unable to create account';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered. Please log in instead.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address. Please check and try again.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please use a stronger password.';
      } else {
        errorMessage = error.message || 'Unable to create account. Please try again.';
      }
      
      addToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-card border border-gray-200 dark:border-gray-700 bg-card dark:bg-secondary rounded-xl">
        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex justify-center mb-6">
            <Logo size="large" />
          </div>
          <CardTitle className="text-2xl font-semibold text-text-primary dark:text-white mb-2">
            Teacher Registration
          </CardTitle>
          <CardDescription className="text-text-secondary dark:text-gray-400">
            Create your faculty account to access CampusTracker
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                  Employee ID
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                  <Input
                    type="text"
                    name="employeeId"
                    placeholder="Enter your employee ID"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10 digit phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange({ target: { name: 'phone', value: e.target.value.replace(/\D/g, '').slice(0, 10) } })}
                    className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                    required
                    maxLength={10}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                  Department
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400 pointer-events-none z-10" />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 pl-10 pr-3 py-2 text-sm text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:border-transparent"
                    required
                  >
                    <option value="">Select your department</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="CSM">Computer Science & Mathematics</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter password (min 8 characters)"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                    required
                  />
                </div>
                <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">
                  Password must be at least 8 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="w-full h-11 font-medium"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>

            <div className="text-center text-sm text-text-secondary dark:text-gray-400 pt-2">
              <p>
                Already have an account?{' '}
                <Link 
                  to="/teacher/login" 
                  className="text-accent-secondary hover:text-accent-secondary/80 dark:text-accent-secondary dark:hover:text-accent-secondary/80 font-medium transition-colors"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
