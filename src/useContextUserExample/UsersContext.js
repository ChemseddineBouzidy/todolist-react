// src/contexts/UserContext.js
import React, { createContext, useState } from 'react'

// Création du contexte
export const UserContext = createContext()

// Provider : composant qui va entourer toute l'app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "chemseddine",
    email: "chams@gmail.com"
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
