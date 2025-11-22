import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Mail, RefreshCw } from 'lucide-react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useToast } from '@/components/ui/Toast'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToast } = useToast()

  const handleReset = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!email) {
      addToast('Please enter your email', 'error')
      setLoading(false)
      return
    }

    // Validate email format only (no whitelist check for password reset)
    const { validateEmailFormat } = await import('@/data/allowedEmails')
    const emailValidation = validateEmailFormat(email)
    
    if (!emailValidation.valid) {
      addToast(emailValidation.message, 'error')
      setLoading(false)
      return
    }

    try {
      await sendPasswordResetEmail(auth, email, {
        url: window.location.origin + '/login',
        handleCodeInApp: false,
      })
      addToast('Password reset link sent! Please check your email inbox (and spam folder).', 'success')
    } catch (error) {
      // Provide user-friendly error messages
      let errorMessage = 'Unable to send reset email'
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email. Please check your email address or register first.'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address. Please check and try again.'
          break
        case 'auth/too-many-requests':
          errorMessage = 'Too many requests. Please wait a few minutes and try again.'
          break
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection and try again.'
          break
        default:
          errorMessage = error.message || 'Unable to send reset email. Please try again later.'
      }
      
      console.error('Password reset error:', error.code, error.message)
      addToast(errorMessage, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-blue-400 to-indigo-500 dark:from-indigo-900 dark:via-blue-900 dark:to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <Card className="w-full max-w-md shadow-2xl border-0 backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 relative z-10">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-4 rounded-full text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
              <RefreshCw className="h-10 w-10" />
            </div>
          </div>
          <CardTitle className="text-3xl bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent font-bold">
            Forgot password?
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300 mt-2">
            Enter the email address you used to register. The reset link will be sent to that email.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form onSubmit={handleReset} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                <Input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-2 border-indigo-200 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  required
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                <strong>Note:</strong> Enter the exact email you used during registration. The reset link will be sent to that email address. Check your spam folder if you don't see it.
              </p>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Sending reset link...' : 'Send reset link'}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 dark:text-slate-300 mt-6">
            Remembered your password?{' '}
            <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold underline transition-colors">
              Back to login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

