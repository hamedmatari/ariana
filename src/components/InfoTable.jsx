import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function InfoTable() {
  const users = useSelector((state) => state.users.users);

  if (users.length >= 1) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Skills</StyledTableCell>
              <StyledTableCell align="right">Date of birth</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <StyledTableRow key={user.name}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {user.skills.join(" , ")}
                  </StyledTableCell>

                  <StyledTableCell align="right">{user.date}</StyledTableCell>

                  <StyledTableCell align="right">{user.age}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <Typography variant="h6">There is not any user</Typography>;
  }
}
