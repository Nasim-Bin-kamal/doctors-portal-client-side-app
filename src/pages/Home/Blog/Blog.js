import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import image from '../../../images/people-2.png';


const Blog = () => {
    return (
        <Box>
            <Container>
                <Typography variant="h6" sx={{ textTransform: "uppercase", color: '#0FE0DC', textAlign: 'center' }}>
                    Our Blog
                </Typography>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    From Our Blog News
                </Typography>
                <Grid container spacing={5} sx={{ my: 5 }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ backgroundColor: '#10C8D5', color: 'white' }}>
                            <CardContent >

                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    Rashed Kobir
                                </Typography>
                                <Typography variant="body2">
                                    01 Nov 2019
                                </Typography>
                                <Typography variant="h6" sx={{ py: 3 }}>
                                    Check at least a doctor in a year for your teeth
                                </Typography>
                                <ArrowRightAltIcon sx={{ fontSize: '50px', mt: 1 }} />

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>

                                <Grid sx={{ display: 'flex', direction: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Grid sx={{ mr: 3 }}>

                                        <img src={image} alt="" />
                                    </Grid>
                                    <Grid>
                                        <Typography variant="subtitle1" sx={{ color: '#0BBAB8' }}>
                                            Dr. Lary Pegh
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            04 Nov 2021
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="subtitle2" sx={{ fontSize: '1rem', py: 2 }}>
                                    Two times of brush in a day can keep you healthy
                                </Typography>
                                <Typography variant="body2">
                                    Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems,
                                </Typography>

                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>

                                <Grid sx={{ display: 'flex', direction: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Grid sx={{ mr: 3 }}>

                                        <img src={image} alt="" />
                                    </Grid>
                                    <Grid>
                                        <Typography variant="subtitle1" sx={{ color: '#0BBAB8' }}>
                                            Dr. Lary Pegh
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            04 Nov 2021
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="subtitle2" sx={{ fontSize: '1rem', py: 2 }}>
                                    Two times of brush in a day can keep you healthy
                                </Typography>
                                <Typography variant="body2">
                                    Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems,
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;