"use client"; 
import { createContext, useContext, useState, ReactNode } from 'react';

// Criação do contexto
const NavbarColorContext = createContext<any>(null);

// Provedor do contexto
export const NavbarColorProvider = ({ children }: { children: ReactNode }) => {
  const [navbarColor, setNavbarColor] = useState('bg-orange-600'); // Cor inicial da navbar

  return (
    <NavbarColorContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </NavbarColorContext.Provider>
  );
};

// Hook para acessar o contexto
export const useNavbarColor = () => useContext(NavbarColorContext);
