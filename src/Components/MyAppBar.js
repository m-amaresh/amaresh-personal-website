// React and related
import * as React from 'react';

// Material UI core components
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';


// Material UI icons
import ComputerIcon from '@mui/icons-material/Computer';

// Custom theme
import Theme from '../themes/DefaultTheme';


function MyAppBar() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {/* AppBar starts here */}
            <AppBar position="relative" >
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ComputerIcon sx={{ mr: 2 }} />
                    <Typography variant="appbar" noWrap sx={{ flexGrow: 1 }}>
                        Amaresh
                    </Typography>
                    <Button component={RouterLink} to="/" color="inherit" sx={{ marginLeft: 'auto' }}>
                        Home
                    </Button>
                    <Button component={RouterLink} to="/resume" color="inherit" sx={{ marginLeft: '1rem' }}>
                        View Resume
                    </Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}


export default MyAppBar;
