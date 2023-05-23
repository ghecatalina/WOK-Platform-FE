import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../actions/items';

const ItemCard = ({
  item, 
  openPopup, 
  setOpenPopup, 
  isEdit, 
  setIsEdit,
  itemForAction,
  setItemForAction}) => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(categoryId, item.id));
    }

    const handleEdit = () => {
      //navigate(`/admin/categories/${categoryId}/items/${item.id}`);
      setItemForAction(item);
      setIsEdit(true);
      setOpenPopup(true);
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250px"
          image={item.photo}
          alt={item.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.ingredients}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.quantity} g
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price} RON
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
            <EditIcon onClick={handleEdit}/>
        </IconButton>
        <IconButton onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ItemCard