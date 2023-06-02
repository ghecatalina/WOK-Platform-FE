import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

const MessageTable = ({recievedMessages}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, recievedMessages.length - page * rowsPerPage);

  return (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '5vh 4vh 0vh 5vh',
            marginBottom: '5vh'
          }}>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Table&nbsp;Number</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Paying Method</TableCell>
                <TableCell align="center">Tip</TableCell>
              </TableRow>
            </TableHead>
            {!recievedMessages ? (
            <TableBody>
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {recievedMessages.length === 0 ? (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} align="center" sx={{color: 'grey', fontSize: 18}}>
                    No data found
                  </TableCell>
                </TableRow>
              ) : (
                recievedMessages
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((message) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                      <TableCell component="th" scope="row">{message.tableNo}</TableCell>
                      <TableCell align="center">{message.type}</TableCell>
                      <TableCell align="center">{message.pay}</TableCell>
                      <TableCell align="center">{message.tip} %</TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          )}
        </Table>         
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={recievedMessages.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </TableContainer>
        </Box>
  )
}

export default MessageTable;