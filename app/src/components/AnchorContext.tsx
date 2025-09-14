import React, { createContext, useContext, ReactNode } from 'react';

interface AnchorContextType {
  isInsideAnchor: boolean;
}

const AnchorContext = createContext<AnchorContextType>({ isInsideAnchor: false });

export const useAnchorContext = () => useContext(AnchorContext);

interface AnchorProviderProps {
  children: ReactNode;
}

export const AnchorProvider: React.FC<AnchorProviderProps> = ({ children }) => {
  return (
    <AnchorContext.Provider value={{ isInsideAnchor: true }}>
      {children}
    </AnchorContext.Provider>
  );
};