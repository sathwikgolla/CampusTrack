import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Sparkles, Mail, Lock } from 'lucide-react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useToast } from '@/components/ui/Toast'
import { useAuth } from '@/contexts/AuthContext'

export function Signup() {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
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

    // Check if email is allowed
    if (!isEmailAllowed(email)) {
      addToast('This email does not have access to register. Please use an authorized email address.', 'error')
      setLoading(false)
      return
    }

    if (password.length < 8) {
      addToast('Password must be at least 8 characters', 'error')
      setLoading(false)
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      setUserType('student')
      addToast('Account created! Welcome to CampusTrack 🎉', 'success')
      navigate('/dashboard')
    } catch (error) {
      // Provide user-friendly error messages
      let errorMessage = 'Unable to create account'
      
      switch (error.code) {
        case 'auth/configuration-not-found':
          errorMessage = 'Firebase Authentication is not configured. Please enable Email/Password authentication in Firebase Console.'
          break
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered. Please use a different email or log in instead.'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address. Please check and try again.'
          break
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled. Please enable Email/Password authentication in Firebase Console.'
          break
        case 'auth/weak-password':
          errorMessage = 'Password is too weak. Please use a stronger password.'
          break
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection and try again.'
          break
        default:
          errorMessage = error.message || 'Unable to create account. Please try again.'
      }
      
      console.error('Signup error:', error.code, error.message)
      addToast(errorMessage, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-rose-400 via-orange-400 to-amber-400 dark:from-emerald-900 dark:via-rose-900 dark:via-orange-900 dark:to-amber-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 right-1/4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <Card className="w-full max-w-md shadow-2xl border-0 backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 relative z-10">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-500 via-rose-500 to-orange-500 p-4 rounded-full text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-10 w-10" />
            </div>
          </div>
          <CardTitle className="text-3xl bg-gradient-to-r from-emerald-600 via-rose-600 to-orange-600 dark:from-emerald-400 dark:via-rose-400 dark:to-orange-400 bg-clip-text text-transparent font-bold">
            Create your account
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300 mt-2">
            Join CampusTrack and keep up with every faculty update
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                <Input
                  type="email"
                  placeholder="you@campus.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-2 border-emerald-200 dark:border-emerald-700 focus:border-emerald-500 dark:focus:border-emerald-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-500 dark:text-rose-400" />
                <Input
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-2 border-rose-200 dark:border-rose-700 focus:border-rose-500 dark:focus:border-rose-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  required
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Use letters, numbers, and symbols for a stronger password.</p>
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 dark:text-slate-300 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold underline transition-colors">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

