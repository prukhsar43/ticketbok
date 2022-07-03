import React from 'react'
import MapMovieCard from '../components/MapMovieCard/MapMovieCard'
import Navbar from "../../src/components/Navbar/Navbar"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Design from '../components/MovieCard/Design/Design';

const FrontPage = () => {
  return (
    <>
    <Navbar/>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <MapMovieCard/>
        </Grid>
        <Grid item xs={6} md={8}>
          <Design/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default FrontPage
