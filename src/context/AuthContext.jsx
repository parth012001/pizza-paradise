import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    // Load registered users from localStorage on initialization
    const saved = localStorage.getItem('registeredUsers')
    return saved ? JSON.parse(saved) : []
  })

  // Save registered users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
  }, [registeredUsers])

  // Check for existing session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    const rememberMe = localStorage.getItem('rememberMe') === 'true'
    
    if (savedUser && rememberMe) {
      setUser(JSON.parse(savedUser))
    } else if (!rememberMe) {
      // Clear any existing session if remember me is not enabled
      localStorage.removeItem('currentUser')
    }
  }, [])

  const login = async (email, password, rememberMe = false) => {
    setIsLoading(true)
    setError(null)
    try {
      // Find user in registered users
      const foundUser = registeredUsers.find(
        user => user.email === email && user.password === password
      )

      if (foundUser) {
        const userWithoutPassword = {
          email: foundUser.email,
          name: foundUser.name
        }
        setUser(userWithoutPassword)
        
        // Store user data and remember me preference
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
        localStorage.setItem('rememberMe', rememberMe)
        
        return true
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (err) {
      setError(err.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name, email, password) => {
    setIsLoading(true)
    setError(null)
    try {
      // Check if user already exists
      const userExists = registeredUsers.some(user => user.email === email)
      
      if (userExists) {
        throw new Error('Email already registered')
      }

      // Add new user to registered users
      const newUser = { name, email, password }
      setRegisteredUsers(prev => [...prev, newUser])

      // Log in the new user
      const userWithoutPassword = {
        email: newUser.email,
        name: newUser.name
      }
      setUser(userWithoutPassword)
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
      
      return true
    } catch (err) {
      setError(err.message)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
    localStorage.removeItem('rememberMe')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isLoading,
      error
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}