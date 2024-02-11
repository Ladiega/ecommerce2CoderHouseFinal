import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './cardItemsTest.css'
export default function CardItemsTest({ itemsData }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={itemsData.img}
          alt={itemsData.painting}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemsData.painting}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Category:{itemsData.category}            

          </Typography>
          <Typography variant="body2" color="text.secondary">           
            Price:  {itemsData.price} EUR
           
          </Typography>
          <Typography variant="body2" color="text.secondary">           
            Stock: {itemsData.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
