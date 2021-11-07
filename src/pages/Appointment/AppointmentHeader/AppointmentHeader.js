import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const bannerBg = {
    background: `url(${bg})`,
    height: '80vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundAttachment: 'inherit',
    backgroundRepeat: 'no-repeat'
}

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto' }} style={bannerBg} >
            <Container >
                <Grid container spacing={2} sx={{ py: 10, mx: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={5} >
                        <Typography variant="h4">
                            Appointment
                        </Typography>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default AppointmentHeader;