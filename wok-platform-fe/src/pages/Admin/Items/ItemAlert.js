import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../../actions/items';

const ItemAlert = ({openAlert, setOpenAlert,categoryId ,item}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(categoryId, item.id));
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
                <p>Are you sure you want to delete the item?</p>
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

export default ItemAlert