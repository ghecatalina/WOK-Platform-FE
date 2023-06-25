import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import { format } from 'date-fns';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteReservationById } from '../../../actions/reservations';

const ReservationAlert = ({openAlert, setOpenAlert, toDelete, date}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        const formData = {
          date: format(date, 'yyyy-MM-dd')
        };
        dispatch(deleteReservationById(Number(toDelete.id), formData));
        setOpenAlert(false);
      }

  return (
    <Dialog open={openAlert} maxWidth="md" >
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
                        Warning
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <p>Are you sure you want to delete the reservation?</p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="contained" 
            onClick={handleDelete}
            sx={{color: 'white',
            background: 'red',
            '&:hover':{
                background: 'darkred'
            }}}
            >Delete</Button>
            <Button
            variant='text'
            sx={{color: 'grey',
            background: 'white',
            '&:hover':{
                color: 'black'
            }}}
             onClick={() => setOpenAlert(false)} autoFocus
             >Cancel</Button>
            </DialogActions>
        </Dialog>
  )
}

export default ReservationAlert