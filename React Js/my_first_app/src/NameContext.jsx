import React, { createContext, useContext, useState } from 'react'

const MyComponent = createContext()

const NameContext = ({ children }) => {
  const [name, updateName] = useState("Venu Gopal")

  return (
    <MyComponent.Provider value={{ name }}>
      {children}
    </MyComponent.Provider>
  )
}

export default NameContext

export const useData = () => useContext(MyComponent)
