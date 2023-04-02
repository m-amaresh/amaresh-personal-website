// React and related
import * as React from 'react';

// Material UI core components
import { Typography, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Custom theme
import Theme from '../themes/DefaultTheme';

function Copyright() {
    const currentDate = new Date().toLocaleString();
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Typography variant="body2" align="center">
                {'Copyright © '}
                Amaresh Mohapatra
                <br />
                {currentDate}
                {'.'}
            </Typography>
        </ThemeProvider>
    );
}

function CopyRightProvider() {
    return (
        <div style={{ position: 'relative', bottom: 0, width: '100%' }}>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p: 3 }} component="footer">
                    <Typography
                        variant="subtitle1"
                        align="center"
                        component="p"
                    >
                        Lets build
                    </Typography>
                    <Copyright />
                </Box>
            </ThemeProvider>
            {/* End footer */}
        </div>
    );
}
export default CopyRightProvider;
