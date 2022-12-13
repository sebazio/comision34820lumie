import { useState, createContext } from 'react'

const Notification = ({ message, status }) => {
  const notificationStyle = {
    position: 'absolute',
    top: 100,
    right: 10,
    width: 'auto',
    height: 'auto',
    backgroundColor: status === 'success' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px 10px 20px'
  }

  if(message === '') return

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}


export const NotificationContext = createContext()

export const NotificationProvidar = ({ children }) => {
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('success')

    const setNotification = (status, msg) => {
        setMessage(msg)
        setStatus(status)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} status={status}/>
            {children}
        </NotificationContext.Provider>
    )
}