import React from 'react';
import { Paper, TableBody, TableCell, TableContainer, Theme, styled, useMediaQuery} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';


type DisplayPropsType = {
    currUserData: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
    },
    [theme.breakpoints.up('sm')]: {
       whiteSpace: 'nowrap',
    }
  }));

const DisplayCurrUser: React.FC<DisplayPropsType> = (props) => {
    // const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const newObj = props.currUserData;

  return (

    <>
    <TableContainer component={Paper}>
        <Table sx={{ border: '5px solid orange' }}>
                <TableBody>
                    {Object.entries(newObj).map(([key, value]) =>(
                        <TableRow>
                            <TableCell>
                                {key}
                            </TableCell>
                            <StyledTableCell>
                                {value}
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            
    
        </Table>
    </TableContainer>

    </>
  )
}

export default DisplayCurrUser