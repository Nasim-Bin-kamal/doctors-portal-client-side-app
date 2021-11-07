import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImage from '../../images/login.png';


const RegisterPage = () => {

    const { registerUser, isLoading, user, errorMsg } = useAuth();
    const [registerData, setRegisterData] = useState({});


    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        console.log(field, value, registerData);

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Password did not match');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, location, history);

    }




    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>

                <Container sx={{ height: '100vh' }}>
                    <Grid container spacing={4} sx={{ my: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 3, m: 5 }}>
                                <Typography variant="h4" sx={{ mx: 'auto', mb: 5, textAlign: 'center', color: '#10C8D5' }}>
                                    Register
                                </Typography>
                                {!isLoading && <form onSubmit={handleSubmit}>

                                    <TextField
                                        onBlur={handleOnBlur}
                                        fullWidth
                                        required
                                        id="name-required"
                                        label="Full Name"
                                        name="name"
                                        type="text"
                                        variant="standard"
                                        sx={{ my: 2, mx: 'auto' }}
                                    />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        fullWidth
                                        required
                                        id="email-required"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        variant="standard"
                                        sx={{ my: 2, mx: 'auto' }}
                                    />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        fullWidth
                                        id="standard-password-input"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="standard"
                                        sx={{ my: 2, mx: 'auto' }}
                                    />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        fullWidth
                                        id="reenter-password-input"
                                        name="password2"
                                        label="Re enter Password"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="standard"
                                        sx={{ my: 2, mx: 'auto' }}
                                    />
                                    {/* <Typography variant="body2" sx={{ color: 'red', py: 2, cursor: 'pointer' }}>
                                        Forgot your password?
                                    </Typography> */}
                                    <Button type="submit" sx={{ width: '100%', backgroundColor: '#0BBAB8', borderRadius: 0, px: 5, color: 'white', mt: 3 }} variant="contained">Register</Button>
                                </form>}

                                {
                                    isLoading && <CircularProgress />
                                }
                                {
                                    user?.email && <Alert severity="success">User Created Successfully!</Alert>

                                }
                                {
                                    errorMsg && <Alert severity="error">{errorMsg}</Alert>
                                }

                                <NavLink style={{ textDecoration: 'none' }} to="/login">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%', margin: 'auto', P: 3 }} src={loginImage} alt="" />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default RegisterPage;