import { useState, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const login = (data) => {
        setUser({ username: data.username})
    }

    const logout = () => {
        setUser()
    }

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}