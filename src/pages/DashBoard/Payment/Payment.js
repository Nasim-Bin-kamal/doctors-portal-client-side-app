import { Elements } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Grid } from '@mui/material';



const stripePromise = loadStripe('pk_test_51JvoX2HPRrHHjKcvTe3XSs1QWqAep8goq4Yr15zp1Sq2BBZx0xvABRuJpDbgDaHfW1RRKx6UagDUDt3jGWsyRIO600IHTY1VXG');


const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
            <Container>
                <div>
                    <h2>Patient Name: {appointment?.patientName}</h2>
                    <h2>Payment for:{appointment?.serviceName}</h2>
                    <h3>Pay: ${appointment?.price}</h3>
                    <h3>Date:{appointment?.date}</h3>
                </div>
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} md={6} lg={6}>
                        {appointment?.price && <Elements stripe={stripePromise}>
                            <CheckoutForm
                                appointment={appointment}
                            />
                        </Elements>}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Payment;


// 1. install stripe and stripe-react
//2. set publishable key
//3.elements 
//4.checkout form
//5.create payment method
//6.