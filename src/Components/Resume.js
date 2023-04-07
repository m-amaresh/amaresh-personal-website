import * as React from 'react';

// Material-UI components
import { Typography, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

// Material-UI icons

// Material-UI layout components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Material-UI theme
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../themes/DefaultTheme';
import MyAppBar from './MyAppBar';
import CopyRightProvider from './CopyRight';

function Resume() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <MyAppBar />
            <Paper sx={{ background: 'transparent', display: 'flex', justifyContent: 'center', margin: '0 3rem', boxShadow: 'none' }}>
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
                                My Resume
                            </Typography>
                            <Divider sx={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: Theme.palette.primary.main, borderTopWidth: '1px' }} />
                        </Grid>
                        {/* Experience section */}
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom>
                                Experience
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Company Name | Job Title | Date
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Description of job responsibilities and achievements
                            </Typography>
                        </Grid>
                        {/* Education section */}
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom>
                                Education
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Degree Name | Institution Name | Date
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Description of degree and academic achievements
                            </Typography>
                        </Grid>
                        {/* Skills section */}
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom>
                                Skills
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                List of skills with proficiency level (e.g. programming languages, software tools, etc.)
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Box sx={{ margin: '3rem 0' }} />
            <CopyRightProvider />
        </ThemeProvider>
    )
}


export default Resume
