import React, {Component} from 'react';
import './App.css';
import {createMuiTheme} from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
