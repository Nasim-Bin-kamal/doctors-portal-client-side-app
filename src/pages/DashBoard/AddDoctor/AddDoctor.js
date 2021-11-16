import { Button, Container, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const successNotify = () => {
        toast.success('Doctor added successfully');
    }


    const handleSubmitInfo = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    successNotify();
                    e.target.reset();
                }
            });
    }
    return (
        <div>
            <Container>
                <ToastContainer />
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Add A doctor
                </Typography>

                <Box sx={{ width: '450px', mx: 'auto', my: 3 }}>
                    <form onSubmit={handleSubmitInfo}>
                        <TextField onBlur={e => setName(e.target.value)} label="Name" variant="standard" fullWidth sx={{ my: 2 }} required />
                        <TextField onBlur={e => setEmail(e.target.value)} label="Email" variant="standard" fullWidth sx={{ my: 2 }} required />
                        <Input onBlur={e => setImage(e.target.files[0])} accept="image/*" id="contained-button-file" type="file" fullWidth sx={{ my: 2 }} />
                        <Button variant="contained" type="submit">
                            Add Doctor
                        </Button>
                    </form>
                </Box>

            </Container>

        </div>
    );
};

export default AddDoctor;