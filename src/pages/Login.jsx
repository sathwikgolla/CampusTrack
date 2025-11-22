import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/components/ui/Toast'
import { Mail, Lock } from 'lucide-react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Logo } from '@/components/Logo'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { user, userType, loading: authLoading, setUserType } = useAuth()
  const { addToast } = useToast()

  // Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      if (userType === 'teacher') {
        navigate('/teacher/dashboard', { replace: true })
      } else {
        navigate('/dashboard', { replace: true })
      }
    }
  }, [user, userType, authLoading, navigate])

  // Show loading while checking auth state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !password) {
      addToast('Please enter email and password', 'error')
      setLoading(false)
      return
    }

    // Validate email format
    const { validateEmailFormat, isEmailAllowed } = await import('@/data/allowedEmails')
    const emailValidation = validateEmailFormat(email)
    
    if (!emailValidation.valid) {
      addToast(emailValidation.message, 'error')
      setLoading(false)
      return
    }

    // Check if email is allowed to login
    if (!isEmailAllowed(email)) {
      addToast('This email does not have access to login. Please contact administrator.', 'error')
      setLoading(false)
      return
    }

    if (password.length < 8) {
      addToast('Password must be at least 8 characters', 'error')
      setLoading(false)
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUserType('student')
      addToast('Welcome back to CampusTrack!', 'success')
      navigate('/dashboard')
    } catch (error) {
      // Provide user-friendly error messages
      let errorMessage = 'Unable to login'
      
      switch (error.code) {
        case 'auth/configuration-not-found':
          errorMessage = 'Firebase Authentication is not configured. Please enable Email/Password authentication in Firebase Console.'
          break
        case 'auth/user-not-found':
          errorMessage = 'Email not found. This email is not registered. Please sign up first or check your email address.'
          break
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password. Please check your credentials and try again, or use "Forgot password?" to reset.'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address. Please check and try again.'
          break
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled. Please contact support.'
          break
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later or reset your password.'
          break
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection and try again.'
          break
        case 'auth/email-not-verified':
          errorMessage = 'Please verify your email address before logging in.'
          break
        default:
          errorMessage = error.message || 'Unable to login. Please check your credentials and try again.'
      }
      
      console.error('Login error:', error.code, error.message)
      addToast(errorMessage, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card border border-gray-200 dark:border-gray-700 bg-card dark:bg-secondary rounded-xl">
        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex justify-center mb-6">
            <Logo size="large" />
          </div>
          <CardTitle className="text-2xl font-semibold text-text-primary dark:text-white mb-2">
            Student Login
          </CardTitle>
          <CardDescription className="text-text-secondary dark:text-gray-400">
            Sign in to access your account
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
                  placeholder="you@campus.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary bg-white dark:bg-gray-800 text-text-primary dark:text-white rounded-lg h-11"
                  required
                />
              </div>
              <div className="text-right mt-2">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
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
                <Link to="/register" className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 font-medium transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
