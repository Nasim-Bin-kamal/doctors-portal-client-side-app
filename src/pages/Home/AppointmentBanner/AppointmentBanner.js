import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(53, 72, 99, 0.847)',
    backgroundBlendMode: 'darken, luminosity'

}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto' }}>
            <Container style={appointmentBg} sx={{ mt: 20, mb: 10 }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <img
                            style={{ width: '400px', marginTop: '-120px', mx: 'auto' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h6" sx={{ my: 1, textTransform: 'uppercase', color: '#0FE0DC' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ textTransform: 'sentencecase', color: 'white' }}>
                            Make an appointment today
                        </Typography>
                        <Typography variant="body2" sx={{ my: 2, textTransform: 'sentencecase', color: 'white' }}>
                            If you want to comfirm an appointment, please click the appointment button below.You can also call for an appointment.
                        </Typography>
                        <Button variant="contained" sx={{ my: 2, borderRadius: 0, backgroundColor: '#18B3B0' }}>Learn More</Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;