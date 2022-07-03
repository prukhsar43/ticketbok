import React, { useState } from 'react'
import NewSeat from './NewSeat'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import style from './NewSeat.module.css'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const MapNewSeat = () => {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const onIn = () => {
    setCount(count + 1)
    setPrice(price + 149)
  }

  const onDe = () => {
    setCount(count - 1)
    setPrice(price - 149)
  }


  localStorage.setItem('Seats', count)
  localStorage.setItem('Price', price)

  return (
    <>
      <div>
        <h1 align="center" style={{ color: "orange" }}>Book your seat here</h1>
        <div className={style.div}>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 4, md: 12 }}>

            {Array.from(Array(21)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <NewSeat key={index} inc={onIn} dec={onDe} />
              </Grid>
            ))}

          </Grid>
        </Box>
      </div>
      <h3 className={style.h3}>You have selected
        <span style={{ color: "blue" }}>
          '{count}'
        </span>
        seats of
        <span style={{ color: "blue" }}>
          '${price}'
        </span>
      </h3>

      <Link to="/final" className={style.link} >
        <Button variant="contained" className={style.button}>
          Checkout
        </Button>
      </Link>
    </>
  )
}

export default MapNewSeat
