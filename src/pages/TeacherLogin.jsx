import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/Toast';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function TeacherLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserType } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      addToast('Please enter email and password', 'error');
      setLoading(false);
      return;
    }

    // Email format validation
    const { validateEmailFormat, isEmailAllowed } = await import('@/data/allowedEmails');
    const emailValidation = validateEmailFormat(email);
    
    if (!emailValidation.valid) {
      addToast(emailValidation.message, 'error');
      setLoading(false);
      return;
    }

    // Check if email is allowed to login
    if (!isEmailAllowed(email)) {
      addToast('This email does not have access to login. Please contact administrator.', 'error');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      addToast('Password must be at least 8 characters', 'error');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserType('teacher');
      addToast('Welcome back!', 'success');
      navigate('/teacher/dashboard');
    } catch (error) {
      let errorMessage = 'Unable to login';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email. Please check your email address or register first.';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'Invalid email or password. Please check your credentials and try again.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address. Please check and try again.';
      } else {
        errorMessage = error.message || 'Unable to login. Please try again.';
      }
      
      addToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card border border-gray-200 dark:border-gray-700 bg-card dark:bg-secondary rounded-xl">
        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex justify-center mb-6">
            <Logo size="large" />
          </div>
          <CardTitle className="text-2xl font-semibold text-text-primary dark:text-white mb-2">
            Teacher Login
          </CardTitle>
          <CardDescription className="text-text-secondary dark:text-gray-400">
            Sign in to access your faculty account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary dark:text-slate-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary dark:text-gray-400" />
                <Input
                  type="password"
                  placeholder="Enter password (min 8 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-accent-secondary dark:focus:border-accent-secondary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                  required
                />
              </div>
              <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">
                Password must be at least 8 characters
              </p>
            </div>
            <Button
              type="submit"
              className="w-full h-11 font-medium"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
            <div className="text-center text-sm text-text-secondary dark:text-gray-400 pt-2">
              <p>
                Don't have an account?{' '}
                <Link 
                  to="/teacher/register" 
                  className="text-accent-secondary hover:text-accent-secondary/80 dark:text-accent-secondary dark:hover:text-accent-secondary/80 font-medium transition-colors"
                >
                  Register here
                </Link>
              </p>
              <p className="mt-2">
                Are you a student?{' '}
                <Link 
                  to="/login" 
                  className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 font-medium transition-colors"
                >
                  Student Login
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
