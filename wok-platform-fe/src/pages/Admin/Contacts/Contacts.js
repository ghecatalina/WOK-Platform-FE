import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContactsByDate } from '../../../actions/contacts';
import { Box, CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, contacts.length - page * rowsPerPage);

  useEffect(() => {
    const formData = {
      date: format(date, 'yyyy-MM-dd')
    };
    dispatch(getContactsByDate(formData));
  },[dispatch, date])

  return (
    <AdminLayout>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '5vh 4vh 0vh 5vh',
        marginBottom: '5vh'
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Choose a date"
            inputFormat="DD-MM-yyyy"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Complaint</TableCell>
                <TableCell align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            {!contacts ? (
            <TableBody>
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {contacts.length === 0 ? (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} align="center" sx={{color: 'grey', fontSize: 18}}>
                    No data found
                  </TableCell>
                </TableRow>
              ) : (
                contacts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((contact) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                      <TableCell component="th" scope="row">{contact.name}</TableCell>
                      <TableCell align="center">{contact.phoneNumber}</TableCell>
                      <TableCell align="center">{contact.email}</TableCell>
                      <TableCell align="center">{contact.complaint}</TableCell>
                      <TableCell align="center">{format(new Date(contact.date), 'dd-MM-yyyy')}</TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          )}
        </Table>            
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={contacts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      </AdminLayout>
  )
}

export default Contacts