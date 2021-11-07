import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const BookingSlot = ({ bookingSlot, date, setSuccessMsg }) => {
    const { name, time, space } = bookingSlot || {};

    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (

        <>
            <Grid item xs={12} md={6} lg={4}>
                <Paper elevation={1} sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ color: '#08A9A6' }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {time}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleModalOpen} sx={{ backgroundColor: '#0BBAB8', color: 'white', mt: 2 }} variant="contained">Booking Appointment</Button>
                </Paper>
            </Grid >
            <AppointmentModal
                bookingSlot={bookingSlot}
                handleModalClose={handleModalClose}
                modalOpen={modalOpen}
                date={date}
                setSuccessMsg={setSuccessMsg}
            />
        </>
    );
};

export default BookingSlot;