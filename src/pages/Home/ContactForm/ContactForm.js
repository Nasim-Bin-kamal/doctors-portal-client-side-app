import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';

const formBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(53, 72, 99, 0.847)',
    backgroundBlendMode: 'darken, luminosity'

}

const ContactForm = () => {
    return (
        <Box>
            <Container style={formBg} sx={{ py: 5, mb: 10, mx: 'auto' }}>
                <Typography variant="h6" sx={{ textTransform: "uppercase", color: '#0FE0DC', textAlign: 'center' }}>
                    Contact us
                </Typography>
                <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
                    Always connect with us
                </Typography>
                <Grid sx={{ my: 3, mx: 'auto' }} item xs={12} md={7}>
                    <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <TextField
                            fullWidth
                            id="outlined-size-small"
                            placeholder="Full name"
                            size="small"
                            sx={{ my: 1, backgroundColor: 'white', borderRadius: 1 }}
                        />
                        <TextField
                            fullWidth
                            id="outlined-size-small"
                            placeholder="email"
                            size="small"
                            sx={{ my: 1, backgroundColor: 'white', borderRadius: 1 }}
                        />
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            placeholder="Message"
                            multiline
                            rows={3}
                            sx={{ my: 1, backgroundColor: 'white', borderRadius: 1 }}
                        />
                        <Button type="submit" sx={{ backgroundColor: '#0BBAB8', px: 5, color: 'white', mt: 2 }} variant="contained">Submit</Button>

                    </form>
                </Grid>
            </Container>
        </Box >
    );
};

export default ContactForm;