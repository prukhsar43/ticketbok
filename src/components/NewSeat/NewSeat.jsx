import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import style from './NewSeat.module.css'

const NewSeat = ({ key, inc, dec }) => {
  const [flag, setFlag] = useState(false)


  const onCLickHandeler = () => {
    inc()
    setFlag(true)
  }
  
  const onCLickHandeler2 = () => {
    dec()
    setFlag(false)
  }
  const onCLickHandeler3 = () => {
    alert("Already Booked")
  }
  return (<>
    <div className={style.div}>
      <br /><br /><br /><br />
      <Box key={key} component="span" style={{ marginLeft: "40px" }} sx={{ p: 2, border: '1px dashed grey' }}>

        {!flag ?
          <Button variant="contained" color="success" onClick={onCLickHandeler}>Book</Button> :

          <Button variant="contained" color="error" onClick={onCLickHandeler2}>Unbook</Button>}
      </Box>
    </div>
    <span>
      <Box key={key} component="span" className={style.book_Seats} style={{ marginLeft: "40px" }} sx={{ p: 2, border: '1px dashed grey' }}>
        <Button variant="contained" color="error" onClick={onCLickHandeler3}>Unbook</Button>
      </Box>
    </span>
  </>
  );
}


export default NewSeat;