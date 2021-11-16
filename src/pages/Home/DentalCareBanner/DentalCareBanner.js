import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import image from '../../../images/treatment.png'
import { Fade } from 'react-reveal';

const DentalCareBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} sx={{ my: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <Grid item xs={12} md={7} sx={{ m: 'auto' }}>
                        <Fade left>
                            <img style={{ width: '75%' }} src={image} alt="" />
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ m: 'auto' }}>
                        <Typography variant="h3" sx={{ textTransform: 'capitalize', pb: 3 }}>
                            Exceptinal dental care on your term
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary", py: 5, lineHeight: '2rem' }} >
                            Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems, including bad breath, dry mouth, canker or cold sores, TMD, tooth decay, or thrush are all treatable with proper diagnosis and care.
                            Oral hygiene is the practice of keeping one's mouth clean and free of disease and other problems by regular brushing of the teeth and cleaning between the teeth. It is important that oral hygiene be carried out on a regular basis to enable prevention of dental disease and bad breath.
                        </Typography>
                        <Button variant="contained" sx={{ my: 2, py: 1, px: 5, borderRadius: 0, backgroundColor: '#18B3B0' }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DentalCareBanner;