import { Button, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



const BookedAppointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const url = `https://hidden-cove-85165.herokuapp.com/appointments?email=${user?.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date, user?.email, token]);

    return (
        <div>
            <Typography variant="h5" sx={{ textAlign: 'center', py: 2 }}>
                Appointments: {appointments.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Appointments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Payment</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment?.patientName}
                                </TableCell>
                                <TableCell align="right">{appointment?.time}</TableCell>
                                <TableCell align="right">{appointment?.serviceName}</TableCell>
                                <TableCell align="right">{appointment?.payment ?
                                    "Paid" :
                                    <Link to={`dashboard/payment/${appointment?._id}`}>
                                        <Button>Payment</Button>
                                    </Link>

                                }</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BookedAppointments;