import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCategoryById } from '../../../actions/categories';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoryCard = ({category, setIsEdit, isEdit, setOpenPopup, setCategory}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToItems = () => {
        navigate(`/admin/categories/${category.id}/items`);
    }
    
    const deleteCategory = () => {
        dispatch(deleteCategoryById(category.id));
    }

    const handleEdit = () => {
        setIsEdit(true);
        setCategory(category);
        setOpenPopup(true);
    }

  return (
    <Card 
    variant='outlined' 
    xs={{minWidth: 200}} 
    sx={{background: 'rgb(57, 59, 57)'}}>
        <CardContent sx={{background: 'rgb(57, 59, 57)'}}>
                <Typography 
                variant='h4' 
                sx={{
                    color: 'white',
                    cursor: 'pointer'
                }} 
                onClick={goToItems}>{category.name}</Typography>
        </CardContent>
        <CardActions>
                <>
                <IconButton onClick={deleteCategory}>
                    <DeleteIcon sx={{color: 'whitesmoke'}} />
                </IconButton>
                <IconButton onClick={handleEdit}>
                    <EditIcon sx={{color: 'whitesmoke'}} />
                </IconButton>
                </>
        </CardActions>
    </Card>
  )
}

export default CategoryCard;