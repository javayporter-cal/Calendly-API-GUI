import React, { createContext, useState, useContext } from 'react';

type CalendlyContextType = {
  bearerToken: string;
  setBearerToken: (token: string) => void;
  orgUri: string;
  setOrgUri: (uri: string) => void;
  userUri: string;
  setUserUri: (uri: string) => void;
};

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bearerToken, setBearerToken] = useState('');
  const [orgUri, setOrgUri] = useState('');
  const [userUri, setUserUri] = useState('');

  return (
    <CalendlyContext.Provider
      value={{ bearerToken, setBearerToken, orgUri, setOrgUri, userUri, setUserUri }}
    >
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendlyContext = () => {
  const context = useContext(CalendlyContext);
  if (!context) throw new Error('useCalendlyContext must be used within a CalendlyProvider');
  return context;
};
