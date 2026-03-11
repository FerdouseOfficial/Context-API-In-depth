import React from 'react'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
    </UserContextProvider>
  )
}

export default App