import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import RecentAppointments from '../Dashboard/RecentAppointments/RecentAppointments';

const overallStatus = [
    {
        currentValue: "09",
        currentStatus: "Pending Appointments",
        background: "#f0795b"
    },
    {
        currentValue: "19",
        currentStatus: "Today's Appointments",
        background: "#23afeb"
    },
    {
        currentValue: "34",
        currentStatus: "Total Appointments",
        background: "#06bd95"
    },
    {
        currentValue: "78",
        currentStatus: "Total Patients",
        background: "#edbc09"
    }
]


const AddDoctor = () => {
    return (
        <div>
            <Grid container spacing={2} >
                {
                    overallStatus?.map(singleStatus => <Grid item xs={12} md={6} lg={3} sx={{}} >
                        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', height: '100%', background: singleStatus.background }} >
                            <Typography variant="h3" sx={{ fontWeight: 500, mr: 3 }}>
                                {singleStatus.currentValue}
                            </Typography>
                            <Typography variant="h5">
                                {singleStatus.currentStatus}
                            </Typography>
                        </Paper>
                    </Grid>)
                }
            </Grid>
            <Grid container spacing={2}>
                <RecentAppointments />
            </Grid>
        </div>
    );
};

export default AddDoctor;