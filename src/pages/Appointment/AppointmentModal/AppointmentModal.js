import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

function AppointmentModal({ bookingSlot, handleModalClose, modalOpen, date, setSuccessMsg }) {
    const { name, time } = bookingSlot || {};
    const { user } = useAuth();
    const defaultInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(defaultInfo);


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[field] = value;
        // console.log(newBookingInfo);
        setBookingInfo(newBookingInfo);
    }

    const handleSubmitAppointment = (e) => {
        e.preventDefault();
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        //collect data and send to server
        fetch('https://hidden-cove-85165.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setSuccessMsg(true);
                    handleModalClose();
                }
            })

        alert('submitting');

    }

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}

            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ mb: 3, textAlign: 'center', color: '#0BBAB8' }}>
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmitAppointment}>
                            <TextField
                                disabled
                                sx={{ width: '100%', mx: 'auto', my: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '100%', mx: 'auto', my: 1 }}
                                id="outlined-size-small"
                                size="small"
                                name="patientName"
                                defaultValue={user?.displayName}
                            />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '100%', mx: 'auto', my: 1 }}
                                id="outlined-size-small"
                                size="small"
                                name="email"
                                defaultValue={user?.email}
                            />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '100%', mx: 'auto', my: 1 }}
                                id="outlined-size-small"
                                placeholder="phone"
                                name="phone"
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '100%', mx: 'auto', my: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type="submit" sx={{ backgroundColor: '#0BBAB8', color: 'white', mt: 2 }} variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
export default AppointmentModal;