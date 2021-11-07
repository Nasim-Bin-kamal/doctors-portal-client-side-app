import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, Paper } from '@mui/material';


const contactInfo = [
    {
        icon: '',
        title: 'Opening Hours',
        desc: 'Sun - Thu: 9.00AM to 5.00PM'
    },
    {
        icon: '',
        title: ' Visit our location',
        desc: '8/9,Dhanmondi,Dhaka.'
    },
    {
        icon: '',
        title: 'Contact us now',
        desc: '+8801744455565'
    }
]




const Contact = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: -12, }}>
                    {
                        contactInfo.map((singleInfo, i) => <Grid key={i} item xs={12} md={4} sx={{ mx: 'auto', my: 3 }}>
                            <Paper sx={{ backgroundColor: '#0BBAB8', p: 3, color: 'white', textAlign: 'center' }}>

                                <Typography variant="h6">
                                    {singleInfo.title}
                                </Typography>
                                <Typography variant="body1">
                                    {singleInfo.desc}
                                </Typography>
                            </Paper>
                        </Grid>)
                    }


                </Grid >
            </Container >

        </Box >
    );
};

export default Contact;