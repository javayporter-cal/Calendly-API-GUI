import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import StyledTableCell from './StyleTableCell';

type ReqRespPropsType = {
  data: Record<string, Record<string, any>>; // data should be an object of objects
};

const ReqResp: React.FC<ReqRespPropsType> = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 480,
        width: '100%',
        overflowX: 'auto', // allow horizontal scroll
        display: 'block',
      }}
    >
      <Table stickyHeader aria-label="API response table" sx={{ minWidth: 800 }}>
        <TableHead>
          {/* Render only the first row's keys as table headers */}
          {Object.entries(data)
            .slice(0, 1)
            .map(([_, value]) => (
              <TableRow key="header-row">
                {Object.keys(value).map((key) => (
                  <TableCell
                    key={key}
                    sx={{
                      backgroundColor: '#D3D3D3',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {key}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableHead>

        <TableBody>
          {Object.entries(data).map(([rowKey, rowValue]) => (
            <TableRow key={rowKey}>
              {Object.entries(rowValue).map(([cellKey, cellValue]) => (
                <StyledTableCell key={cellKey}>
                  {JSON.stringify(cellValue)}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReqResp;


