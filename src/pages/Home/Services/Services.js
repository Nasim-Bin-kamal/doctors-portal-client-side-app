import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleService from '../SingleService/SingleService';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical';

const services = [
    {
        name: 'Fluride Treatment',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        image: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto', my: 5 }}>
            <Container sx={{ my: 5, mx: 'auto' }}>
                <Typography variant="h6" component="div" sx={{ my: 5, fontWeight: '500', textAlign: 'center', color: 'info.main', textTransform: 'uppercase' }}>
                    Our Services
                </Typography>
                <Typography variant="h3" component="div" sx={{ fontWeight: '500', textAlign: 'center' }}>
                    Services
                    <Typical
                        steps={[' We Provide', 1000, ' With Best', 1000, ' Doctors', 1000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service, i) => <SingleService key={i} service={service}></SingleService>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;