import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const SingleDoctor = ({ doctor }) => {
    const { name, email, image } = doctor || {};
    return (

        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={`data:image/jpeg;base64,${image}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default SingleDoctor;