import React, {Component} from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import "./assets/scss/material-kit-react.css?v=1.3.0";

const hist = createBrowserHistory();

class App extends Component {
    render() {
        return (
                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route path={prop.path} key={key} component={prop.component} />;
                        })}
                    </Switch>
                </Router>
        );
    }
}

export default App;
