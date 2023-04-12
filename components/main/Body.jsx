import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import Side from './Side'
import Main from './Main'

const Body = () => {
  return (
    <Container direction="row" justifyContent="space-around">
    {/* left side */}
    <Grid container spacing={2}>
    <Grid item md={4} xs={12}><Side/></Grid>
    <Grid item md={8} xs={12}><Main/></Grid>
        
        
    </Grid>
      </Container>
  )
}

export default Body
