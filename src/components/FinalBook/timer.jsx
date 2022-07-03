import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MyTimer = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0)

    useEffect(() => {

        var timer = setInterval((x) => {
            setSecond(second + 1)

            if (second === 59) {
                setMinute(minute + 1)
                setSecond(0)
            }
        }, 1000)

        return () => clearInterval(timer)
    })
    return (
        <Card sx={{ display: 'flex', marginTop: "20px", marginRight: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>

                    <Typography component="div" variant="h5" sx={{ color: "blue" }}>

                        Time for your ticket confirmation

                    </Typography>
                    
                    <Typography component="div" variant="h5"
                        sx={{ color: "Red", marginLeft: '190px', marginTop: "40px" }}>

                        <h1>
                            {minute < 10 ? "0" + minute : minute}
                            :{second < 10 ? '0' + second : second}
                        </h1>

                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default MyTimer;
