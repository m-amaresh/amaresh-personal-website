import * as React from 'react';

// Material-UI components
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';

// Material-UI icons
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';

// Material-UI layout components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Material-UI theme
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../themes/DefaultTheme';

function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0 3rem' }}>
                <Box sx={{
                    marginTop: '3rem',
                    maxWidth: '1000px',
                    [Theme.breakpoints.down('sm')]: {
                        marginLeft: '1rem',
                        marginRight: '1rem' // Keep the right margin as 1rem for mobile devices
                    }
                }}>
                    <Grid container spacing={3}>
                        {/* About me text */}
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I am a dynamic and skilled multi-cloud infrastructure engineer,
                                driven by a deep passion for crafting exceptional solutions for enterprise clients across a diverse range of industries.
                                With over five years of hands-on experience in designing, architecting, and implementing cutting-edge cloud infrastructure solutions,
                                I possess a comprehensive understanding of cloud infrastructure, identity, and security across a variety of platforms,
                                including major cloud providers, private clouds, and on-premise data centers.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                My approach to infrastructure design emphasizes simplicity, security, and scalability,
                                and I consistently deliver high-quality results on-time and with meticulous attention to detail.
                                My commitment to documentation ensures that every aspect of my projects is well-documented and easily accessible to stakeholders.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                My expertise has been recognized through my certification as a Microsoft Azure Solution Architect Expert and Microsoft 365 Enterprise Administrator Expert,
                                underscoring my ability to deliver exceptional solutions that meet the unique needs of clients in a rapidly evolving digital landscape.
                            </Typography>

                            {/* Button */}
                            <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="outlined" color="primary" sx={{ marginRight: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        <MailIcon sx={{ marginRight: '0.5rem' }} />
                                        Contact me
                                    </Button>
                                    <Button variant="outlined" color="primary" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        <DownloadIcon sx={{ marginRight: '0.5rem' }} />
                                        Download Resume
                                    </Button>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default Home;
