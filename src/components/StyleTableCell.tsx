import { TableCell, styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // Mobile: allow text to wrap naturally
  [theme.breakpoints.down("sm")]: {
    whiteSpace: "normal",
    wordBreak: "break-word",
    maxWidth: "300px",
    padding: '8px',
  overflowWrap: 'break-word',
  },

  // Desktop: restrict width and apply ellipsis for overflow
  [theme.breakpoints.up("sm")]: {
    whiteSpace: "nowrap", // FIXED typo: was "mowrap"
    overflow: "hidden",
    //textOverflow: "ellipsis",
    maxWidth: "300px", // This prevents cell from stretching too far
  },
}));

export default StyledTableCell;

// import { TableCell, styled } from "@mui/material";

// const StyledTableCell = styled(TableCell)(() => ({
//   whiteSpace: "normal",
//   wordBreak: "break-word",
//   overflowWrap: "break-word",
//   maxWidth: "300px", // Keeps column width reasonable
//   overflow: "auto",  // Allows scroll if needed (e.g., long strings without spaces)
//   padding: "8px",
// }));

// export default StyledTableCell;

