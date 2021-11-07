import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={3}>

                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>

                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>

                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;