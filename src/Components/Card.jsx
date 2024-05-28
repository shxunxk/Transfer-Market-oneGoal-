import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const FaceCard = ({ image, name, description, date, source }) => {
    return (
      <Card sx={{ width: 345, height: 400 }}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="image"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Date: {date}
            </Typography>
            <Typography variant="body2" color="text.primary">
             Source: {source}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

export default FaceCard;
