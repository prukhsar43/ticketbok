import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MyTimer from './timer';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const FinalBook = () => {

  const navigate = useNavigate()
  const seats = localStorage.getItem('Seats')
  const price = localStorage.getItem('Price')

  setTimeout(() => {
    localStorage.removeItem('Seats')
    localStorage.removeItem('Price')
    alert("Your time for ticket confirmation is over")
    navigate("/ticket")
  }, 300000)

  const confirmHandeler = () => {
    alert("Your tickets are confirmed")
    navigate('/')
  }

  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>

          <div style={{ backgroundColor: "pink", height: '98vh', }}>

            <h2 align="center" style={{ marginTop: '10px' }}>
              You have selected {seats} seats
            </h2>

            <h3>
              Total amount is :- ${price}
            </h3>

            <Button variant="contained" onClick={confirmHandeler}>
              Confirm
            </Button>

          </div>
        </Grid>
        <Grid item xs={4}>

          <MyTimer />

        </Grid>
      </Grid>
    </Box>
  </>)
}

export default FinalBook;
