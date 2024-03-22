import "./message-history.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MessageHistory({ users, messages }) {
  const rows = messages.map((message) => {
    const sender = users.find((user) => user.id === message.sender);
    return {
      ...message,
      sender: sender ? sender.firstName + " " + sender.lastName : "",
    };
  });
  return (
    <div className="history">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align="right">Sender</TableCell>
              <TableCell align="right">Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.content}
                </TableCell>
                <TableCell align="right">{row.sender}</TableCell>
                <TableCell align="right">{row.timestampSent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
