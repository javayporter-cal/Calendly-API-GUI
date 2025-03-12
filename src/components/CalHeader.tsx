import React from 'react';
 

interface NavHeaderProps {
 title: string;
 onBack?: () => void;
 children?: React.ReactNode;
}


const NavHeader: React.FC<NavHeaderProps> = ({ title, onBack, children }) => {
 return (
 <header style={styles.header}>
 <div style={styles.leftSection}>
 {onBack && (
 <button style={styles.backButton} onClick={onBack}>
 &lt; Back
 </button>
 )}
 <h1 style={styles.title}>{title}</h1>
 </div>
 <div style={styles.rightSection}>{children}</div>
 </header>
 );
};


const styles = {
 header: {
 display: 'flex',
 justifyContent: 'space-between',
 alignItems: 'center',
 padding: '10px 20px',
 backgroundColor: 'white',
 textColor: 'black'
 },
 leftSection: {
 display: 'flex',
 alignItems: 'center',
 },
 backButton: {
 marginRight: '10px',
 padding: '5px 10px',
 cursor: 'pointer',
 },
 title: {
 fontSize: '20px',
 margin: 0,
 color: 'black'
 },
 rightSection: {
 // Styles for right section content
 },
};


export default NavHeader;