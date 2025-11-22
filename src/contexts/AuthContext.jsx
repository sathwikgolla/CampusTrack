import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userType, setUserTypeState] = useState(() => localStorage.getItem('campusTrack_userType'))

  const updateUserType = (type) => {
    if (type) {
      localStorage.setItem('campusTrack_userType', type)
    } else {
      localStorage.removeItem('campusTrack_userType')
    }
    setUserTypeState(type)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      if (!firebaseUser) {
        updateUserType(null)
      } else {
        // If user is logged in but userType is not set, restore from localStorage or set default
        const savedUserType = localStorage.getItem('campusTrack_userType')
        if (!savedUserType) {
          // If no userType is saved, default to 'student' for Firebase authenticated users
          updateUserType('student')
        } else {
          // Ensure the state matches localStorage
          setUserTypeState(savedUserType)
        }
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    await signOut(auth)
    updateUserType(null)
  }

  const legacyLogin = () => {
    console.warn('Legacy login is deprecated. Please use Firebase authentication flows.')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userType,
        setUserType: updateUserType,
        login: legacyLogin,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
