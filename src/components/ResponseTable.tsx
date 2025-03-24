import React, { useState } from 'react';
import '../App.css';
import Paper from '@mui/material/Paper';
import { TableCell, TableContainer, TableHead, TablePagination } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


type MyComponentPropsType = {
    data1: string;
    data2?: string;
    data3?: string;
    data4?: string;
    data5?: string;
    buttonLabel1: string;
    buttonLabel2?: string;
    buttonLabel3?: string;
    buttonLabel4?: string;
    buttonLabel5?: string;
    onClick?: () => void; // Optional prop
    onClick2?: () => void; // Optional prop
  };

const MyComponent: React.FC<MyComponentPropsType> = (props) => {
  const [activeDiv, setActiveDiv] = useState<'div1' | 'div2'| 
  'div3' | 'div4' | 'div5'>('div1');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleButtonClick = (divId: 'div1' | 'div2' | 'div3' | 'div4' | 'div5') => {
    setActiveDiv(divId);

  };

  return (
    <div>
        <ButtonGroup  aria-label="Medium-sized button group">
            <Button style={{color: '#0066ff'}} onClick={() => handleButtonClick('div1')}>{props.buttonLabel1}</Button>
            <Button style={{color: '#0066ff'}} onClick={() => handleButtonClick('div2')}>{props.buttonLabel2}</Button>
            <Button style={{color: '#0066ff'}} onClick={() => handleButtonClick('div3')}>{props.buttonLabel3}</Button>
            <Button style={{color: '#0066ff'}} onClick={() => handleButtonClick('div4')}>{props.buttonLabel4}</Button>
            <Button style={{color: '#0066ff'}} onClick={() => handleButtonClick('div5')}>{props.buttonLabel5}</Button>
        </ButtonGroup>

      {activeDiv === 'div1' && (
        <div style={{padding: '10px', margin: '10px' }}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            {Object.entries(props.data1).slice(0, 1).map(([key, value]) => (
            <TableRow key={key}>
                {Object.entries(value).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(([key]) => (
            <TableCell key={key} style={{backgroundColor: '#D3D3D3', fontWeight: 'bold'}}>
                <td>{key}</td>
            </TableCell>
                ))}
            </TableRow>
                    ))}
            </TableHead>
            {Object.entries(props.data1).map(([key, value]) => (
            <TableRow key={key}>
                {Object.entries(value).map(([key, newValue]) => (
            <TableCell key={key}>
                <td>{JSON.stringify(newValue)}</td>
            </TableCell>
                ))}
            </TableRow>
                    ))}
        </Table>
        </TableContainer>
            <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={(props.data1).length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </div>
      )}

        {activeDiv === 'div2' && (
                <div style={{padding: '10px', margin: '10px' }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    {Object.entries(props.data2).slice(0, 1).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key]) => (
                    <TableCell key={key} style={{backgroundColor: '#D3D3D3', fontWeight: 'bold'}}>
                        <td>{key}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                    </TableHead>
                    {Object.entries(props.data2).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key, newValue]) => (
                    <TableCell key={key}>
                        <td>{JSON.stringify(newValue)}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                </Table>
                </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={(props.data2).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                </div>
            )}

        {activeDiv === 'div3' && (
                <div style={{padding: '10px', margin: '10px' }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    {Object.entries(props.data3).slice(0, 1).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key]) => (
                    <TableCell key={key} style={{backgroundColor: '#D3D3D3', fontWeight: 'bold'}}>
                        <td>{key}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                    </TableHead>
                    {Object.entries(props.data3).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key, newValue]) => (
                    <TableCell key={key}>
                        <td>{JSON.stringify(newValue)}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                </Table>
                </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={(props.data3).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                </div>
            )}

        {activeDiv === 'div4' && (
                <div style={{padding: '10px', margin: '10px' }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    {Object.entries(props.data4).slice(0, 1).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key]) => (
                    <TableCell key={key} style={{backgroundColor: '#D3D3D3', fontWeight: 'bold'}}>
                        <td>{key}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                    </TableHead>
                    {Object.entries(props.data4).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key, newValue]) => (
                    <TableCell key={key}>
                        <td>{JSON.stringify(newValue)}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                </Table>
                </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={(props.data4).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                </div>
            )}

        {activeDiv === 'div5' && (
                <div style={{padding: '10px', margin: '10px' }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    {Object.entries(props.data5).slice(0, 1).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key]) => (
                    <TableCell key={key} style={{backgroundColor: '#D3D3D3', fontWeight: 'bold'}}>
                        <td>{key}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                    </TableHead>
                    {Object.entries(props.data5).map(([key, value]) => (
                    <TableRow key={key}>
                        {Object.entries(value).map(([key, newValue]) => (
                    <TableCell key={key}>
                        <td>{JSON.stringify(newValue)}</td>
                    </TableCell>
                        ))}
                    </TableRow>
                            ))}
                </Table>
                </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={(props.data5).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                </div>
            )}


    </div>
  );
};

export default MyComponent;