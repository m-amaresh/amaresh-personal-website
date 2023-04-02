import { createTheme } from '@mui/material/styles';
import "@fontsource/roboto-slab";
import "@fontsource/poppins";

const Theme = createTheme({
    palette: {
        primary: {
            main: "#E63946", // Cardinal
            contrastText: "#FFFFFF", // White
        },
        secondary: {
            main: "#EEE8AA", // Pale Goldenrod
            contrastText: "#333333", // Dark gray
        },
        text: {
            primary: "#333333", // Dark gray
            secondary: "#FFFFFF", // White
        },
        background: {
            default: "#FFFFFF", // White
            paper: "#E63946", // Dark Orchid
        },
    },
    typography: {
        fontFamily: [
            'Roboto Slab', // Default font family for all text
            'Poppins', // Font family for headers
        ].join(','),
        appbar: {
            fontFamily: 'Poppins',
            fontWeight: 400,
            color: '#FFFFFF', // White
        },
        h1: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: '#523A34', // Van Dyke
        },
        h2: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: '#523A34', // Van Dyke
        },
        h3: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: '#523A34', // Van Dyke
        },
        h4: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: '#523A34', // Van Dyke
        },
        h5: {
            fontFamily: 'Poppins',
            fontWeight: 500,
            color: '#523A34', // Van Dyke
        },
        h6: {
            fontFamily: 'Poppins',
            fontWeight: 400,
            color: '#523A34', // Van Dyke
        },
        subtitle1: {
            fontFamily: 'Roboto Slab',
            fontWeight: 500,
            color: '#40E0D0', // Turquoise
        },
        subtitle2: {
            fontFamily: 'Roboto Slab',
            fontWeight: 500,
            color: '#40E0D0', // Turquoise
        },
        body1: {
            fontFamily: 'Roboto Slab',
            fontWeight: 400,
            color: '#424B54', // Charcoal
        },
        body2: {
            fontFamily: 'Roboto Slab',
            fontWeight: 400,
            color: '#40E0D0', // Turquoise
        },
        button: {
            fontFamily: 'Roboto Slab',
            fontWeight: 500,
            color: '#FFFFFF', // Pale Goldenrod
        },
    },
});


export default Theme;
