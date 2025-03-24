import React from 'react';
import '../App.css';
import Paper from '@mui/material/Paper';
import { TableCell, TableContainer, TableHead } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

type ReqRespPropsType = {
    data: string;
}

const ReqResp: React.FC<ReqRespPropsType> = (props) => {
  return (
    <>
    <div style={{padding: '10px', margin: '10px' }}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            {Object.entries(props.data).slice(0, 1).map(([key, value]) => (
            <TableRow key={key}>
                {Object.entries(value).map(([key]) => (
            <TableCell key={key} style={{backgroundColor: '#D3D3D3', fontWeight: 'bold'}}>
                {key}
            </TableCell>
                ))}
            </TableRow>
                    ))}
            </TableHead>
            {Object.entries(props.data).map(([key, value]) => (
            <TableRow key={key}>
                {Object.entries(value).map(([key, newValue]) => (
            <TableCell key={key}>
                {JSON.stringify(newValue)}
            </TableCell>
                ))}
            </TableRow>
                    ))}
        </Table>
        </TableContainer>
        </Paper>
        </div> 
    </>
  )
}

export default ReqResp