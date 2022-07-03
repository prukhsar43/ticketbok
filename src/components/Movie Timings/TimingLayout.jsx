import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MovieTiming1Move from './MovieTiming1Movie';
import Grid1 from './Grid1';
import Grid2 from './Grid2';

const TimingLayout = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>

                    <Grid item xs>
                        <Grid1 />
                    </Grid>

                    <Grid item xs={6}>
                        <MovieTiming1Move />
                    </Grid>

                    <Grid item xs>
                        <Grid2 />
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}
export default TimingLayout;