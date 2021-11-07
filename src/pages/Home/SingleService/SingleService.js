import Grid from '@mui/material/Grid';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';



const SingleService = ({ service }) => {
    const { name, description, image } = service || {};
    return (

        <Grid item xs={4} sm={4} md={4} sx={{ mx: 'auto' }}>
            <Card style={{ margin: '20px auto', textAlign: 'center' }} sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: 'auto', margin: '0 auto' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>

    );
};

export default SingleService;