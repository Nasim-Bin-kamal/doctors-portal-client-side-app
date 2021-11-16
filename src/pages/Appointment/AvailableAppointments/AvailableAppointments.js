import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import BookingSlot from '../BookingSlot/BookingSlot';


const bookingSlots = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8.00 AM - 9.00 AM',
        space: 10,
        price: 20
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        space: 8,
        price: 25
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5.00 PM -6.30 PM',
        space: 10,
        price: 40
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7.30 AM -8.30 AM',
        space: 12,
        price: 35
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8.00 AM -9.00 AM',
        space: 10,
        price: 50
    },
    {
        id: 6,
        name: 'Teeth Cleaning',
        time: '5.00 PM -6.30 PM',
        space: 12,
        price: 10
    }
]

const AvailableAppointments = ({ date }) => {

    const [successMsg, setSuccessMsg] = useState(false);



    return (

        <Box>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', mx: 'auto', mt: 5, color: '#0BBAB8', fontWeight: 500 }}>
                    Available Appointments on: {date.toDateString()}
                </Typography>
                {
                    successMsg && <Alert severity="success">Appointment Successfull!!</Alert>

                }
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ my: 5, }}>
                    {
                        bookingSlots?.map(bookingSlot => <BookingSlot
                            key={bookingSlot.id}
                            bookingSlot={bookingSlot}
                            date={date}
                            setSuccessMsg={setSuccessMsg}

                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AvailableAppointments;