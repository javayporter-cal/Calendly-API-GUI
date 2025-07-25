import React, { createContext, useState, useContext } from 'react';

type OrgMember = {
  name: string;
  uri: string;
};

type CalendlyContextType = {
  bearerToken: string;
  setBearerToken: (token: string) => void;
  orgUri: string;
  setOrgUri: (uri: string) => void;
  userUri: string;
  setUserUri: (uri: string) => void;
  orgMembers: OrgMember[];
  setOrgMembers: (m: OrgMember[]) => void;
};

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bearerToken, setBearerToken] = useState('');
  const [orgUri, setOrgUri] = useState('');
  const [userUri, setUserUri] = useState('');
  const [orgMembers, setOrgMembers] = useState<OrgMember[]>([]);


  return (
    <CalendlyContext.Provider
      value={{ bearerToken, setBearerToken, orgUri, setOrgUri, userUri, setUserUri, orgMembers, setOrgMembers }}
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

