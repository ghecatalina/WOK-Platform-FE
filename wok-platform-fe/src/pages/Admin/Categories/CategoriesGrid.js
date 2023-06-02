import { Box, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard';

const CategoriesGrid = ({setIsEdit, isEdit, setOpenPopup, setCategory}) => {
    const categories = useSelector(state => state.categories);

    return (
        <Grid container 
        spacing={3}
        direction="row">
            {categories != null && categories.map(category => {
                return (
                    <Box>
                        <Grid item key={category.id} style={{margin: 20}}>
                            <CategoryCard 
                            category={category} 
                            setIsEdit={setIsEdit} 
                            isEdit={isEdit} 
                            setOpenPopup={setOpenPopup}
                            setCategory={setCategory}/>
                        </Grid>
                    </Box>
                )
            })}
        </Grid>
    )
}

export default CategoriesGrid