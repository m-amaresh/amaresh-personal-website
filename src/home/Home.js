import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import ComputerIcon from '@mui/icons-material/Computer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../themes/DefaultTheme';
import { Button } from '@mui/material';



export default function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {/* AppBar starts here */}
            <AppBar position="relative" >
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ComputerIcon sx={{ mr: 2 }} />
                    <Typography variant="appbar" noWrap>
                        Amaresh Mohapatra
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{
                    marginTop: '3rem',
                    maxWidth: '1000px',
                    [Theme.breakpoints.down('sm')]: {
                        marginLeft: '1rem',
                        marginRight: '1rem'
                    }
                }}>
                    <Grid container spacing={3}>
                        {/* About me text */}
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I am a passionate and dedicated multi-cloud infrastructure engineer with 5+ years extensive hands-on experience in designing,
                                architecting and implementing solutions for enterprise customers across different domains like banking, retail, manufacturing and ISV.
                                I have a broad understanding of cloud infrastructure, identity and security across major cloud providers, private clouds and on-premise data-centre.
                                I emphasise simple, secure and scalable architecture with good documentation and timely deliverables.
                                I am certified Microsoft Azure Solution Architect Expert and Microsoft 365 Enterprise Administrator Expert.

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



