import React from 'react';
import { TableBody, TableCell} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';


type DisplayPropsType = {
    currUserData: string;
}

const DisplayCurrUser: React.FC<DisplayPropsType> = (props) => {

    const newObj = props.currUserData;

  return (

    <>
        <Table>
                <TableBody>
                    {Object.entries(newObj).map(([key, value]) =>(
                        <TableRow>
                            <TableCell>
                                {key}
                            </TableCell>
                            <TableCell>
                                {value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            
        </Table>
    </>
  )
}

export default DisplayCurrUser