import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const TopStickHeader: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      backgroundColor: '#0066ff',
      padding: '10px',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
    }}>
      {children}
    </header>
  );
};

export default TopStickHeader;