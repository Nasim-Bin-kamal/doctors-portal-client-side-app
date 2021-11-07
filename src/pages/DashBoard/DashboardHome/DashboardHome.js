import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Calender from '../../Shared/Calender/Calender';
import BookedAppointments from '../Dashboard/BookedAppointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} lg={5} >
                    <Calender date={date} setDate={setDate} />
                    <h2>date:{date.toLocaleDateString()}</h2>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <BookedAppointments date={date} />
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;