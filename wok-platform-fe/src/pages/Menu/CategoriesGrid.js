import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../actions/items';

const CategoriesGrid = () => {
    const categories = useSelector(state => state.categories);
    const {items, isLoading} = useSelector(state => state.items);
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
        {categories != null && categoryId != null && categories.map((category) => {
            return (
                <>
                <Box justifyContent='center' alignItems='center'>
                    <Grid item key={category.id} style={{margin: 20}}>
                    <Button 
                        variant='text' 
                        sx={{
                            color: categoryId === category.id ? 'black' : 'inherit',
                        }}
                        onClick={() => handleCategory(category.id)}
                    >
                        <Typography sx={{ fontWeight: categoryId === category.id ? 600 : 400 }}>
                            {category.name}
                        </Typography>
                    </Button>
                    </Grid>
                </Box>
                </>
            )
        })}
        {isLoading ? 
        <Box item xs={12} display="flex" justifyContent="center" alignItems="center" minHeight="71vh">
        <Box minWidth={'90vw'} textAlign="center">
          <CircularProgress />
        </Box>
      </Box> :
        (<Grid container spacing={3} 
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
                )}
    </Grid>
  )
}

export default CategoriesGrid