// React and related
import * as React from 'react';

// Material UI core components
import { AppBar, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Material UI icons
import ComputerIcon from '@mui/icons-material/Computer';

// Custom theme
import Theme from '../themes/DefaultTheme';


function MyAppBar() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {/* AppBar starts here */}
            <AppBar position="fixed" >
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ComputerIcon sx={{ mr: 2 }} />
                    <Typography variant="appbar" noWrap>
                        Amaresh Mohapatra
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default MyAppBar;
