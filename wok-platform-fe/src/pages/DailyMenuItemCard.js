import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const DailyMenuItemCard = ({item}) => {
  return (
    <Card  maxWidth='40vh'>
        <CardMedia
        component="img"
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
  )
}

export default DailyMenuItemCard