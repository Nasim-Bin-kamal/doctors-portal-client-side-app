import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';


const users = [
    {
        id: '1',
        name: 'Winson Herry',
        address: 'California',
        image: `url(${people1})`,
        desc: 'Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems, including bad breath, dry mouth, canker or cold sores, TMD, tooth decay, or thrush are all'
    },
    {
        id: '2',
        name: 'Preety Trininty',
        address: 'Virginia',
        image: `url(${people2})`,
        desc: 'Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems, including bad breath, dry mouth, canker or cold sores, TMD, tooth decay, or thrush are all'
    },
    {
        id: '3',
        name: 'Henry Keyts',
        address: 'California',
        image: `url(${people3})`,
        desc: 'Good dental or oral care is important to maintaining healthy teeth, gums and tongue. Oral problems, including bad breath, dry mouth, canker or cold sores, TMD, tooth decay, or thrush are all'
    }
]

const Testimonial = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ my: 10 }}>
                <Typography variant="h6" sx={{ textTransform: 'uppercase', color: '#0BBAB8' }}>
                    Testimonial
                </Typography>
                <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
                    Whats our patients says
                </Typography>

                <Grid container spacing={4} sx={{ my: 3 }}>
                    {
                        users.map(user => <Grid key={user.id} item xs={12} md={4}>
                            <Fade duration={2000}>
                                <Card>
                                    <CardContent>
                                        <Typography>
                                            {user.desc}
                                        </Typography>
                                        <Grid sx={{ mt: 3, display: 'flex', direction: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <Grid>

                                                <img src={people1} alt="" />
                                            </Grid>
                                            <Grid>
                                                <Typography variant="subtitle1" sx={{ color: '#0BBAB8' }}>
                                                    {user.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {user.address}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>
                            </Fade>

                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;