import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('campusTrack_theme')
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme
      }
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  useEffect(() => {
    // Apply theme to document immediately with smooth transition
    const root = document.documentElement
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease'
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('campusTrack_theme', theme)
    }
    
    // Cleanup transition after theme is applied
    setTimeout(() => {
      root.style.transition = ''
    }, 300)
  }, [theme])

  const toggleTheme = () => {
    // Optimize theme toggle with immediate visual feedback
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      // Apply immediately for better UX
      const root = document.documentElement
      if (newTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

