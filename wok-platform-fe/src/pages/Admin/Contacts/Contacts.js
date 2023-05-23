import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContactsByDate } from '../../../actions/contacts';
import { Box, CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

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
        height: '100vh',
        padding: '5vh 4vh 0vh 5vh'
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Choose a date"
            inputFormat="DD-MM-YYYY"
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
            {
              !contacts ?
              <CircularProgress /> :
              <TableBody>
                {
                  contacts.map((contact) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                      <TableCell component="th" scope="row">{contact.name}</TableCell>
                      <TableCell align="center">{contact.phoneNumber}</TableCell>
                      <TableCell align="center">{contact.email}</TableCell>
                      <TableCell align="center">{contact.complaint}</TableCell>
                      <TableCell align="center">{format(new Date(contact.date), 'dd-MM-yyyy')}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            }
            </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      </AdminLayout>
  )
}

export default Contacts