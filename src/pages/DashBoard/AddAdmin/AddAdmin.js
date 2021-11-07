import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddAdmin = () => {
    const [email, setEmail] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmitAdmin = (e) => {

        const user = { email };
        e.preventDefault();
        fetch('https://hidden-cove-85165.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    setSuccessMsg(true);
                }
            });

    }
    return (
        <div>
            <Container>

                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={12} sx={{ maxWidth: 500, my: 5 }} >
                        <Box sx={{ my: 3 }}>
                            {
                                successMsg && <Alert severity="success">Admin Created Successfully!!</Alert>
                            }
                        </Box>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
                                Add new Admin
                            </Typography>
                            <form onSubmit={handleSubmitAdmin}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="standard"
                                    type="email"
                                    onBlur={handleOnBlur}
                                ></TextField>
                                <Button sx={{ my: 3 }} type="submit" variant="contained">Add Admin</Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>


        </div>
    );
};

export default AddAdmin;