import { Button, Typography } from '@mui/material'
import React from 'react'

const CategoryButton = ({category}) => {
    return (
      <div>
          <Button variant='text' sx={{color: 'black'}}>
              {category.name}
          </Button>
      </div>
    )
  }

export default CategoryButton;