import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCategoryById } from '../../../actions/categories';
import { Alert, AlertTitle, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Icon, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CategoryAlert = ({category, setOpenAlert, openAlert}) => {
    const dispatch = useDispatch();

    const deleteCategory = () => {
        dispatch(deleteCategoryById(category.id));
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
                <p>Are you sure you want to delete the category?</p>
                <p>All items assigned to this category will also be deleted.</p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="contained" 
            onClick={deleteCategory}
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

export default CategoryAlert