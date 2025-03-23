import React, { useState } from 'react';
import '../App.css';
import Paper from '@mui/material/Paper';
import { TableCell, TableContainer } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';


type MyComponentPropsType = {
    data1: string;
    data2: string;
    data3: string;
    data4: string;
    buttonLabel1: string;
    buttonLabel2: string;
    buttonLabel3: string;
    buttonLabel4: string;
    onClick?: () => void; // Optional prop
    onClick2?: () => void; // Optional prop
  };

const MyComponent: React.FC<MyComponentPropsType> = (props) => {
  const [activeDiv, setActiveDiv] = useState<'div1' | 'div2'| 
  'div3' | 'div4'>('div1');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleButtonClick = (divId: 'div1' | 'div2' | 'div3' | 'div4') => {
    setActiveDiv(divId);

  };

  return (
    <div>
      <button onClick={() => handleButtonClick('div1')}>{props.buttonLabel1}</button>
      <button onClick={() => handleButtonClick('div2')}>{props.buttonLabel2}</button>
      <button onClick={() => handleButtonClick('div3')}>{props.buttonLabel3}</button>
      <button onClick={() => handleButtonClick('div4')}>{props.buttonLabel4}</button>

      {activeDiv === 'div1' && (
        <div style={{padding: '10px', margin: '10px' }}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
        <Table stickyHeader aria-label="sticky table">
            {Object.entries(props.data1).map(([key, value]) => (
            
            <TableRow key={key}>
                {Object.entries(value).map(([key, newValue]) => (
            <TableCell key={key}>
                <td>{key}: </td>
                <td>{JSON.stringify(newValue)}</td>
            </TableCell>
                ))}
            </TableRow>
                    ))}
        </Table>
        </TableContainer>
        </Paper>
        </div>
      )}

      {activeDiv === 'div2' && (
        <div style={{ padding: '10px', margin: '10px' }}>
          <TableContainer>
        
        {Object.entries(props.data2).map(([key, value]) => (
        <TableRow key={key}>
            {Object.entries(value).map(([key, newValue]) => (
        <TableCell key={key}>
            <td>{key}: </td>
            <td>{JSON.stringify(newValue)}</td>
        </TableCell>
            ))}
        </TableRow>
                ))}
    
    </TableContainer>
        </div>
      )}

        {activeDiv === 'div3' && (
        <div style={{ padding: '10px', margin: '10px' }}>
        <TableContainer>
      
      {Object.entries(props.data3).map(([key, value]) => (
      <TableRow key={key}>
          {Object.entries(value).map(([key, newValue]) => (
      <TableCell key={key}>
          <td>{key}: </td>
          <td>{JSON.stringify(newValue)}</td>
      </TableCell>
          ))}
      </TableRow>
              ))}
  
  </TableContainer>
      </div>
      )}

    {activeDiv === 'div4' && (
        <div style={{ padding: '10px', margin: '10px' }}>
        <TableContainer>
      
      {Object.entries(props.data4).map(([key, value]) => (
      <TableRow key={key}>
          {Object.entries(value).map(([key, newValue]) => (
      <TableCell key={key}>
          <td>{key}: </td>
          <td>{JSON.stringify(newValue)}</td>
      </TableCell>
          ))}
      </TableRow>
              ))}
  
  </TableContainer>
      </div>
      )}

    </div>
  );
};

export default MyComponent;