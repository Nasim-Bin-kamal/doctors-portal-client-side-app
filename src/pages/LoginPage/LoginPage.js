import { Alert, CircularProgress, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImage from '../../images/login.png';



const LoginPage = () => {
    const [loginData, setLoginData] = useState({});

    const { signInWithGoogle, signInUser, isLoading, user, errorMsg, } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value, loginData);
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);



    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(loginData.email, loginData.password, location, navigate);


    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>

                <Container sx={{ height: '100vh' }} >
                    <Grid container spacing={4} sx={{ my: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} md={6} >
                            <Paper sx={{ p: 3, m: 5 }}>
                                <Typography variant="h4" sx={{ mx: 'auto', mb: 5, textAlign: 'center', color: '#10C8D5' }}>
                                    Login
                                </Typography>
                                {!isLoading && <form onSubmit={handleSubmit}>

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
                                    <Typography variant="body2" sx={{ color: 'red', py: 2, cursor: 'pointer' }}>
                                        Forgot your password?
                                    </Typography>
                                    <Button type="submit" sx={{ width: '100%', backgroundColor: '#0BBAB8', borderRadius: 0, px: 5, color: 'white', mt: 3 }} variant="contained">Login</Button>
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


                                <NavLink style={{ textDecoration: 'none' }} to="/register">
                                    <Button variant="text">New user? Create Account</Button>
                                </NavLink>

                                <Typography variant="subtitle2" sx={{ py: 3, textAlign: 'center' }}>
                                    You can also login With
                                </Typography>

                                <Button onClick={handleGoogleSignIn} variant="contained" >Google Sign In</Button>

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

export default LoginPage;