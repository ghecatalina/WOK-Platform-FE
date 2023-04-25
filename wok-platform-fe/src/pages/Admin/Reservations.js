import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { Box, CircularProgress, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReservationById, getReservationsByDate } from '../../actions/reservations'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReservationPopup from '../ReservationPopup';
import EditReservationForm from './EditReservationForm'

const Reservations = () => {
  const reservations = useSelector(state => state.reservations);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [openPopup, setOpenPopup] = useState(false);
  const [reservationToEdit, setReservationToEdit] = useState(null);

  useEffect(() => {
    const formData = {
      date: format(date, 'yyyy-MM-dd')
    };
    dispatch(getReservationsByDate(formData));
  },[dispatch, date])

  const handleDelete = (id) => {
    const formData = {
      date: format(date, 'yyyy-MM-dd')
    };
    dispatch(deleteReservationById(Number(id), formData));
  }

  const handleEdit = (reservation) => {
    setReservationToEdit(reservation);
    setOpenPopup(true);
  }

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
                <TableCell>Table&nbsp;Number</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Phone&nbsp;Number</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            {
              !reservations ?
              <CircularProgress /> :
              <TableBody>
                {
                  reservations.map((reservation) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                      <TableCell component="th" scope="row">{reservation.tableNumber}</TableCell>
                      <TableCell align="center">{reservation.name}</TableCell>
                      <TableCell align="center">{reservation.phoneNumber}</TableCell>
                      <TableCell align="center">{format(new Date(reservation.date), 'dd-MM-yyyy hh:mm')}</TableCell>
                      <TableCell align="center">{reservation.details}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => handleEdit(reservation)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(reservation.id)}>
                          <DeleteIcon sx={{color: 'black'}}/>
                        </IconButton>
                      </TableCell>
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
      <ReservationPopup title="Edit Reservation" openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <EditReservationForm 
          reservation={reservationToEdit}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}/>
        </ReservationPopup>
    </AdminLayout>
  )
}

export default Reservations