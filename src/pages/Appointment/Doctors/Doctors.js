import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors/')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', my: 3 }}>
                    Our Doctors
                </Typography>
                <Grid container spacing={2}>
                    {
                        doctors?.map(doctor => <SingleDoctor key={doctor?._id} doctor={doctor} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;