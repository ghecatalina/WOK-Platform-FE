import { Box, Divider, TextField, Typography } from '@mui/material';
import React from 'react';

const schema = yup.object().shape({
    name: yup.string().required(),
  });

const CategoryDrawerBox = () => {

  return (
    <Box p={2} width='400px' textAlign='center'>
        <Typography variant='h4'>Add Category</Typography>
        <Divider />
        <Box sx={{marginTop: '20px'}}>
            <form>
                <TextField label='Category Name'></TextField>
                <Button variant='contained'>Save</Button>
            </form>
        </Box>
    </Box>
  )
}

export default CategoryDrawerBox;