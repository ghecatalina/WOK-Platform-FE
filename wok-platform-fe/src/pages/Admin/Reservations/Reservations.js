import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/AdminLayout/AdminLayout'
import { Box, CircularProgress, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReservationById, getReservationsByDate } from '../../../actions/reservations'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReservationPopup from '../../Reservations/ReservationPopup'
import EditReservationForm from './EditReservationForm';
import ReservationAlert from './ReservationAlert'

const Reservations = () => {
  const reservations = useSelector(state => state.reservations);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [openPopup, setOpenPopup] = useState(false);
  const [reservationToEdit, setReservationToEdit] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, reservations.length - page * rowsPerPage);

  useEffect(() => {
    const formData = {
      date: format(date, 'yyyy-MM-dd')
    };
    dispatch(getReservationsByDate(formData));
  },[dispatch, date])

  const handleDelete = (reservation) => {
    setToDelete(reservation);
    setOpenAlert(true);
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
        minHeight: '100vh',
        padding: '5vh 4vh 0vh 5vh',
        marginBottom: '5vh'
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Choose a date"
            inputFormat="dd-MM-YYYY"
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
          <Table aria-label="simple table">
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
            {!reservations ? (
            <TableBody>
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {reservations.length === 0 ? (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} align="center" sx={{color: 'grey', fontSize: 18}}>
                    No data found
                  </TableCell>
                </TableRow>
              ) : (
                reservations
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((reservation) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                      <TableCell component="th" scope="row">{reservation.tableNumber}</TableCell>
                      <TableCell align="center">{reservation.name}</TableCell>
                      <TableCell align="center">{reservation.phoneNumber}</TableCell>
                      <TableCell align="center">{format(new Date(reservation.date), 'dd-MM-yyyy HH:mm')}</TableCell>
                      <TableCell align="center">{reservation.details}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => handleEdit(reservation)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(reservation)}>
                          <DeleteIcon sx={{color: 'black'}}/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          )}
        </Table>            
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={reservations.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
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
      <ReservationAlert openAlert={openAlert} setOpenAlert={setOpenAlert} toDelete={toDelete} date={date}/>
    </AdminLayout>
  )
}

export default Reservations