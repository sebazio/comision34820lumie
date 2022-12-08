import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { user, login, logout } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
    }

    if(user) {
        return (
            <div>
                <h1>Logout</h1>
                <button onClick={() => logout()}>Logout</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                username:
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                password:
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login