import { Box, Button, Divider, Drawer, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createItem, getItems } from '../../actions/items';
import ItemsGrid from './ItemsGrid';
import AdminLayout from '../../components/AdminLayout';
import ItemPopup from './ItemPopup';
import AddEditItemForm from './AddEditItemForm';

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

    useEffect(() => {
        dispatch(getItems(categoryId))
      }, [categoryId]);

      const handleAddItem = () => {
        setIsEdit(false);
        setItemForAction(initialState);
        setOpenPopup(true);
      }

  return (
    <AdminLayout>
        <Box>
        <Box sx={{margin: '20px', minHeight: '100vh', justifyContent: 'center', justifyItems: 'center'}}>
            <Button 
            variant="contained" style={{backgroundColor: "black", margin: '10px'}}
            onClick={handleAddItem}
            >Add Item</Button>
            <Divider sx={{margin: '20px'}}/>
            <ItemsGrid 
            isEdit={isEdit} 
            setIsEdit={setIsEdit}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            itemForAction={itemForAction}
            setItemForAction={setItemForAction}/>
        </Box>
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
    </AdminLayout>
  )
}

export default Items;