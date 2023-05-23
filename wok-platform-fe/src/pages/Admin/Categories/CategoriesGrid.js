import { Box, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard';

const CategoriesGrid = () => {
    const categories = useSelector(state => state.categories);

    return (
        <Grid container 
        spacing={3}
        direction="row">
            {categories != null && categories.map(category => {
                return (
                    <Box>
                        <Grid item key={category.id} style={{margin: 20}}>
                            <CategoryCard category={category} />
                        </Grid>
                    </Box>
                )
            })}
        </Grid>
    )
}

export default CategoriesGrid