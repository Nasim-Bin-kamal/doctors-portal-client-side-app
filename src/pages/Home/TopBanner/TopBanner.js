import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerBg = {
    background: `url(${bg})`,
    height: '80vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'inherit',
    backgroundRepeat: 'no-repeat'
}

const TopBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto' }} style={bannerBg} >
            <Container >
                <Grid container spacing={2} sx={{ my: 10, pb: 10, mx: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={5} >
                        <Typography variant="h2" sx={{ mb: 3, textTransform: 'capitalize', fontWeight: 'bold' }}>
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                            We have best countries best specialist doctors.We want to serve best services for our paitents.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#1AC5C2', my: 3, py: 1.5 }}>Get Appointment</Button>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default TopBanner;