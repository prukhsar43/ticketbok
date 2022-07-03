import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';

const MovieCard = ({ key, ele }) => {
  return (<>
    <Link to="/Movie">

      <Card sx={{
        maxWidth: 345, marginLeft: "20px",
        marginTop: "20px"
      }} key={key}>

        <CardActionArea>

          <CardMedia
            component="img"
            height="340"
            image={ele.img}
            alt="green iguana"
          />

          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              Name:-  {ele.Name}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              Price:-  {ele.Price}
            </Typography>

          </CardContent>

        </CardActionArea>
      </Card>
    </Link>
  </>
  );
}
export default MovieCard;