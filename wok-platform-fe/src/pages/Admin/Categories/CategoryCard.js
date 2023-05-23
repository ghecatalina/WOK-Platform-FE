import { Card, CardActions, CardContent, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCategoryById, updateCategorybyId } from '../../../actions/categories';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoryCard = ({category}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [name, setName] = useState(category.name);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUpdateCategory = () => {
        const categoryInfo ={
            name: name
        }
        dispatch(updateCategorybyId(category.id, categoryInfo));
        setIsEditable(false);
    }

    const goToItems = () => {
        navigate(`/admin/categories/${category.id}/items`);
    }
    
    const deleteCategory = () => {
        dispatch(deleteCategoryById(category.id));
    }

  return (
    <Card 
    variant='outlined' 
    xs={{minWidth: 200}} 
    sx={{background: 'rgb(57, 59, 57)'}}>
        <CardContent sx={{background: 'rgb(57, 59, 57)'}}>
            {
                isEditable ?
                <TextField 
                variant='standard' 
                label='Name' 
                defaultValue={category.name} 
                sx={{background: 'white'}}
                onChange={(e) => setName(e.target.value)}></TextField> :
                <Typography 
                variant='h4' 
                sx={{
                    color: 'white',
                    cursor: 'pointer'
                }} 
                onClick={goToItems}>{category.name}</Typography> 
            }
        </CardContent>
        <CardActions>
            {
                !isEditable &&
                <>
                <IconButton onClick={deleteCategory}>
                    <DeleteIcon sx={{color: 'whitesmoke'}} />
                </IconButton>
                <IconButton onClick={() => setIsEditable(!isEditable)}>
                    <EditIcon sx={{color: 'whitesmoke'}} />
                </IconButton>
                </>
            }
            {
                isEditable &&
                <>
                <IconButton onClick={handleUpdateCategory}>
                    <CheckIcon sx={{color: 'whitesmoke'}} />
                </IconButton>
                <IconButton onClick={() => setIsEditable(false)}>
                    <CloseIcon sx={{color: 'whitesmoke'}} />
                </IconButton>
                </>
            }
        </CardActions>
    </Card>
  )
}

export default CategoryCard;