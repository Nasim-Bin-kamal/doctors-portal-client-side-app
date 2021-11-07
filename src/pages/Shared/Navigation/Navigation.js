import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, signOutUser } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <NavLink to="/home">
                            Home
                        </NavLink>
                        <NavLink to="/appointment">
                            Appointment
                        </NavLink>
                        {user.email && <NavLink to="/dashboard">
                            Dashboard
                        </NavLink>}
                        {
                            user?.email ?
                                <div>

                                    <Typography variant="subtitle" sx={{ mx: 3 }}>{user?.displayName}</Typography>
                                    <Button onClick={signOutUser} sx={{ backgroundColor: 'red', color: 'white', mx: 2 }}>Log Out</Button>
                                </div>
                                :
                                <div>
                                    <NavLink to="/register" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{ backgroundColor: '#10ada9', mx: 2 }}>Register</Button>
                                    </NavLink>
                                    <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{ backgroundColor: '#10ada9', mx: 2 }}>Login</Button>
                                    </NavLink>
                                </div>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
};

export default Navigation;