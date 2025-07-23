import React from 'react';
import {
  Modal,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledTableCell from './StyleTableCell';

type ReqRespPropsType = {
  data: Record<string, Record<string, any>>;
  open: boolean;
  onClose: () => void;
};

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  overflow: 'auto',
  borderRadius: '10px',
};

const ReqResp: React.FC<ReqRespPropsType> = ({ data, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="response-modal">
      <Box sx={modalStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">API Response</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 480, overflowX: 'auto' }}>
          <Table stickyHeader aria-label="API response table" sx={{ minWidth: 800 }}>
            <TableHead>
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
      </Box>
    </Modal>
  );
};

export default ReqResp;
