import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getItems } from '../../../actions/items';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';
import AddEditItemForm from './AddEditItemForm';
import ItemsGrid from './ItemsGrid';
import ItemPopup from './ItemPopup';
import { getCategoryById } from '../../../api';
import ItemAlert from './ItemAlert';

const initialState ={
    name: '',
    quantity: 0,
    ingredients: '',
    description: '',
    photo: '',
    price: 0
}

const Items = () => {
    const {categoryId} = useParams();
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [itemForAction, setItemForAction] = useState(formData);
    const [openPopup, setOpenPopup] = useState(false);
    const [category, setCategory] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);
    const [toDelete, setToDelete] = useState(null);

    useEffect(() => {
        dispatch(getItems(categoryId));

        getCategoryById(categoryId)
        .then(response => {
          setCategory(response.data);
        })
        .catch(err => {
          console.log(err.message);
        })
      }, [categoryId]);

      const handleAddItem = () => {
        setIsEdit(false);
        setItemForAction(initialState);
        setOpenPopup(true);
      }

  return (
    <AdminLayout>
        <Box>
          {category &&
        <Box sx={{margin: '20px', minHeight: '100vh', justifyContent: 'center', justifyItems: 'center'}}>
          <Box display="flex" flexDirection="row">
          <Typography variant='h4' sx={{marginRight: '1vh'}}>{category.name}</Typography>
            <Button 
            sx={{
              "&":{
                background: 'black',
                margin: '0.6vh'
              },
              "&:hover":{
                  background: 'grey',
              }}}
            variant="contained"
            onClick={handleAddItem}
            >Add Item</Button>
            </Box>
            <Divider sx={{margin: '20px'}}/>
            <ItemsGrid 
            isEdit={isEdit} 
            setIsEdit={setIsEdit}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            itemForAction={itemForAction}
            setItemForAction={setItemForAction}
            setToDelete={setToDelete}
            setOpenAlert={setOpenAlert}/>
        </Box>
        }
        </Box>
        <ItemPopup 
        title={isEdit ? 'Edit Item' : 'Add Item'} 
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
          <AddEditItemForm 
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          item={itemForAction}
          isEdit={isEdit}/>
        </ItemPopup>
        <ItemAlert categoryId={categoryId} item={toDelete} openAlert={openAlert} setOpenAlert={setOpenAlert}/>
    </AdminLayout>
  )
}

export default Items;