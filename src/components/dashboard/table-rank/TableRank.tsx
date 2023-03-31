import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { theme } from "../../../theme";
import { Typography } from "@mui/material";

function createData(name: string, popularity: number) {
  return { name, popularity };
}

const rows = [
  createData("Frozen yoghurt", 29),
  createData("Ice cream sandwich", 40),
  createData("Eclair", 12),
  createData("Cupcake", 17),
];

export default function TableRank() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: theme.palette.bgComponent.main,
      }}
    >
      <Typography variant="h6" fontWeight="800" p={2} color="white">
        Top Products
      </Typography>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: theme.palette.colorFont.main, width: "20px" }}
            >
              #
            </TableCell>
            <TableCell sx={{ color: theme.palette.colorFont.main }}>
              Name
            </TableCell>
            <TableCell sx={{ color: theme.palette.colorFont.main }}>
              Sales
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": {
                  borderBottom: "none !important",
                },
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "white" }}>{row.popularity}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
