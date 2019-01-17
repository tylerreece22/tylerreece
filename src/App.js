import React, {Component} from 'react';
import './App.css';
import {createMuiTheme} from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import "./assets/scss/material-kit-react.css?v=1.3.0";

// @fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faIgloo, fab);

const hist = createBrowserHistory();

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route path={prop.path} key={key} component={prop.component} />;
                        })}
                    </Switch>
                </Router>,
                {/*<ProfilePage/>*/}
            </MuiThemeProvider>
        );
    }
}

export default App;
