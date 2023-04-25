import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryButton from './CategoryButton';
import { getItems } from '../actions/items';

const CategoriesGrid = () => {
    const categories = useSelector(state => state.categories);
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState(null);

    useEffect(() =>{
        if (categories != null && categories.length > 0){
            setCategoryId(categories[0].id);
        }
    },[categories])

    useEffect(() =>{
        dispatch(getItems(categoryId))
    }, [dispatch, categoryId])

    const handleCategory = (id) => {
        setCategoryId(id);
    }

  return (
    <Grid container justifyContent='center' alignItems='center'>
        {categories != null && categories.map((category) => {
            return (
                <>
                <Box justifyContent='center' alignItems='center'>
                    <Grid item key={category.id} style={{margin: 20}}>
                        <Button variant='text' sx={{color: 'black'}} onClick={() => handleCategory(category.id)}>
                            {category.name}
                        </Button>
                    </Grid>
                </Box>
                </>
            )
        })}
        <Grid container spacing={3} 
        justifyContent='space-around' 
        alignItems='center'
        sx={{
            padding: '10vh'
        }}>
            {
                items != null && items.map((item) => {
                    return(
                        <Grid item>
                            <Card sx={{ maxWidth: 345 }}>
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
                                <Divider />
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
                            </Card>
                        </Grid>
                    )
                })
            }
                </Grid>
    </Grid>
  )
}

export default CategoriesGrid