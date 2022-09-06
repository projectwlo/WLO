import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Router} from './Router';
import { IntlProvider } from 'react-intl';
import { messages } from './assets/translations/messages';
import { Toaster } from 'react-hot-toast';
import {Navbar} from "reactstrap";
import Cookies from "js-cookie";

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Fab' {
    interface FabPropsColorOverrides {
        neutral: true;
    }
}

function App() {

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });
    const language = Cookies.get('language') || 'es';

    return (
        <div className="App">
            <IntlProvider locale={language} messages={messages[language] as any}>
            <ThemeProvider theme={theme}>

                <Router/>
                <Toaster />
            </ThemeProvider>
            </IntlProvider>
        </div>
    );
}

export default App;
